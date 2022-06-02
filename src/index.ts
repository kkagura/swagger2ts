import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load, resolve } from "./load.js";
import { convert } from "./transform.js";
import prompts from "prompts";
import { getDefinitions, setMock, setRef, setTags, tagExist } from "./store.js";
import Swagger, { ObjectScheme, SwaggerRequest } from "types/index.js";
import {
  collectRefType,
  convertRefKey,
  createRefName,
  isValidName,
  upperFirst,
} from "./utils.js";
import { removeRef, removeWrapper } from "./removeRef.js";
const { writeFileSync } = fs;

export async function run(
  input: string,
  output: string,
  options: {
    tag: boolean;
    mock: boolean;
  }
) {
  const { tag, mock } = options;
  setMock(mock);
  const res = await load(input);
  if (res.swagger !== "2.0") {
    throw new Error("请使用2.0版本的swagger");
  }
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
    } else {
      setTags(answer.tags);
    }
  }
  pre(res);
  let data = "";
  // let data = transformSchemaObjMap(res.definitions);
  data += convert(res);
  let defs = "";
  const definitions = getDefinitions();
  for (let i = 0; i < definitions.length; i++) {
    defs += transformSchemaObjMap({
      [definitions[i]]: res.definitions[definitions[i]],
    });
  }
  data = defs + data;
  data = createHeader(res) + "\n\n" + data;
  writeFileSync(output, data);
}

function pre(swagger: Swagger) {
  let types: string[] = [];
  removeRef(swagger);
  Object.keys(swagger.paths).forEach((key) => {
    const path = swagger.paths[key];
    Object.keys(path).forEach((method) => {
      const request = path[method] as SwaggerRequest;
      const exist = request.tags.some((tag) => tagExist(tag));
      if (!exist) {
        delete path[method];
        return;
      }
      request.parameters?.forEach((p) => {
        types.push(...collectRefType(p.type ? p : p.schema));
      });
      if (method !== "get") {
        request.parameters?.forEach((p) => {
          if (
            p.in === "body" &&
            request.parameters?.filter((i) => i.in === "body").length === 1
          ) {
            if (p.schema?.$ref) {
              const ref = convertRefKey(p.schema.$ref);
              if (!isValidName(ref)) {
                setRef(ref, upperFirst(request.operationId) + "Data");
              }
            }
          }
        });
      }
      if (request.responses["200"]?.schema?.$ref) {
        const ref = convertRefKey(request.responses["200"].schema.$ref);
        if (!isValidName(ref)) {
          setRef(ref, upperFirst(request.operationId) + "Result");
        }
      }
      types.push(...collectRefType(request.responses["200"]?.schema));
    });
    types = types.reduce((pre, curr) => {
      if (curr && !pre.includes(curr)) {
        pre.push(curr);
      }
      return pre;
    }, [] as string[]);
    if (Object.keys(path).length === 0) {
      delete swagger.paths[key];
    }
  });
  // Object.keys(swagger.definitions).forEach((name) => {
  //   if (!types.includes(name)) {
  //     delete swagger.definitions[name];
  //   }
  // });
}

function createHeader(swagger: Swagger) {
  const comments: string[] = ["powered by wyyt-fe"];
  if (swagger.info?.title) {
    comments.push(swagger.info.title);
  }
  if (swagger.info?.description) {
    comments.push(`@description:  ${swagger.info.description}`);
  }
  if (swagger.info?.version) {
    comments.push(`@version:  ${swagger.info.version}`);
  }
  return ["/**", ...comments.map((c) => ` * ${c}`), " */"].join("\n");
}
