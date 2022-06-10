import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load } from "./load.js";
import { convert } from "./transform.js";
import prompts from "prompts";
import { addPathMethod, getDefinitions, methodExist, setMock, setRef, setTags, tagExist, } from "./store.js";
import { collectRefType, convertRefKey, isValidName, upperFirst, } from "./utils.js";
import { removeRef } from "./removeRef.js";
const { writeFileSync } = fs;
export async function run(input, output, options) {
    const { tag, mock, list } = options;
    setMock(mock);
    const res = await load(input);
    if (res.swagger !== "2.0") {
        throw new Error("请使用2.0版本的swagger");
    }
    if (list) {
        const { paths } = res;
        const rows = [];
        Object.keys(paths).forEach((url) => {
            Object.keys(paths[url]).forEach((method) => {
                rows.push({
                    method: method.toUpperCase(),
                    url,
                    description: paths[url][method].summary,
                });
            });
        });
        console.table(rows, ["description", "method", "url"]);
        const i = await prompts({
            type: "text",
            name: "pathNames",
            message: "输入需要生成的接口索引，以英文逗号分隔，如 0,2,4，直接回车将生成所有接口",
        });
        const pathNames = i.pathNames;
        if (pathNames) {
            pathNames.split(",").forEach((index) => {
                const i = parseInt(index);
                if (i >= 0 && i < rows.length) {
                    const { method, url } = rows[index];
                    addPathMethod(url, method);
                }
                else {
                    throw new Error("输入值不合法");
                }
            });
        }
    }
    else if (tag) {
        const { tags } = res;
        const choices = (tags || []).map(({ name, description }) => {
            return {
                value: name,
                title: `${name}(${description})`,
            };
        });
        const q = {
            type: "multiselect",
            name: "tags",
            message: "选择需要生成的接口分类(空格选择，回车结束)",
            choices,
        };
        const answer = await prompts([q]);
        if (!answer.tags.length) {
            console.log("未选择任何分类，默认生成全部接口");
        }
        else {
            setTags(answer.tags);
        }
    }
    pre(res);
    let data = "";
    data += convert(res);
    let defs = "";
    const definitions = getDefinitions();
    for (let i = 0; i < definitions.length; i++) {
        defs += transformSchemaObjMap({
            [definitions[i]]: res.definitions[definitions[i]],
        });
    }
    data = `const baseURL = "${res.basePath || ""}"\n\n` + defs + data;
    data = createHeader(res) + "\n\n" + data;
    writeFileSync(output, data);
}
function pre(swagger) {
    let types = [];
    removeRef(swagger);
    Object.keys(swagger.paths).forEach((key) => {
        const path = swagger.paths[key];
        Object.keys(path).forEach((method) => {
            var _a, _b, _c, _d, _e;
            const request = path[method];
            let exist = request.tags.some((tag) => tagExist(tag));
            if (!exist) {
                delete path[method];
                return;
            }
            exist = methodExist(key, method.toUpperCase());
            if (!exist) {
                delete path[method];
                return;
            }
            (_a = request.parameters) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                types.push(...collectRefType(p.type ? p : p.schema));
            });
            if (method !== "get") {
                (_b = request.parameters) === null || _b === void 0 ? void 0 : _b.forEach((p) => {
                    var _a, _b;
                    if (p.in === "body" &&
                        ((_a = request.parameters) === null || _a === void 0 ? void 0 : _a.filter((i) => i.in === "body").length) === 1) {
                        if ((_b = p.schema) === null || _b === void 0 ? void 0 : _b.$ref) {
                            const ref = convertRefKey(p.schema.$ref);
                            if (!isValidName(ref)) {
                                setRef(ref, upperFirst(request.operationId) + "Data");
                            }
                        }
                    }
                });
            }
            if ((_d = (_c = request.responses["200"]) === null || _c === void 0 ? void 0 : _c.schema) === null || _d === void 0 ? void 0 : _d.$ref) {
                const ref = convertRefKey(request.responses["200"].schema.$ref);
                if (!isValidName(ref)) {
                    setRef(ref, upperFirst(request.operationId) + "Result");
                }
            }
            types.push(...collectRefType((_e = request.responses["200"]) === null || _e === void 0 ? void 0 : _e.schema));
        });
        types = types.reduce((pre, curr) => {
            if (curr && !pre.includes(curr)) {
                pre.push(curr);
            }
            return pre;
        }, []);
        if (Object.keys(path).length === 0) {
            delete swagger.paths[key];
        }
    });
}
function createHeader(swagger) {
    var _a, _b, _c;
    const comments = ["powered by wyyt-fe"];
    if ((_a = swagger.info) === null || _a === void 0 ? void 0 : _a.title) {
        comments.push(swagger.info.title);
    }
    if ((_b = swagger.info) === null || _b === void 0 ? void 0 : _b.description) {
        comments.push(`@description:  ${swagger.info.description}`);
    }
    if ((_c = swagger.info) === null || _c === void 0 ? void 0 : _c.version) {
        comments.push(`@version:  ${swagger.info.version}`);
    }
    return ["/**", ...comments.map((c) => ` * ${c}`), " */"].join("\n");
}
