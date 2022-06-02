import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load } from "./load.js";
import { convert } from "./transform.js";
import prompts from "prompts";
import { getDefinitions, setMock, setRef, setTags, tagExist } from "./store.js";
import { collectRefType, convertRefKey, isValidName, upperFirst, } from "./utils.js";
import { removeRef } from "./removeRef.js";
const { writeFileSync } = fs;
export async function run(input, output, options) {
    const { tag, mock } = options;
    console.log(input, output, tag, mock);
    setMock(mock);
    const res = await load(input);
    if (tag) {
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
    data = defs + data;
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
            const exist = request.tags.some((tag) => tagExist(tag));
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