import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load, resolve } from "./load.js";
import { convert } from "./transform.js";
import prompts from "prompts";
import { setTags, tagExist } from "./store.js";
import Swagger, { SwaggerRequest } from "types/index.js";
import { collectRefType } from "./utils.js";
const { writeFileSync } = fs;

export async function run(input: string, output: string, tag: boolean) {
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
    setTags(answer.tags);
  }
  pre(res);
  let data = transformSchemaObjMap(res.definitions);
  data += convert(res);
  writeFileSync(output, data);
}

function pre(swagger: Swagger) {
  let types: string[] = [];
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
      if (request.responses["200"]?.schema?.$ref?.includes("EntityResult")) {
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
  console.log(types);
  // Object.keys(swagger.definitions).forEach((name) => {
  //   if (!types.includes(name)) {
  //     delete swagger.definitions[name];
  //   }
  // });
}
