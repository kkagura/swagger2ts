import { transformSchemaObj } from "./definitions.js";
import { SwaggerPath, SwaggerRequest } from "types";
import { convertRefKey } from "./utils.js";

export function convertPath(path: SwaggerPath, url: string) {
  let codes = "\n\n";
  Object.keys(path).forEach((method) => {
    const swaggerRequest = path[method] as SwaggerRequest;
    const res = convertRequest(swaggerRequest, method, url);
    codes += res;
  });
  return codes;
}

function convertRequest(request: SwaggerRequest, method: string, url: string) {
  const { operationId, parameters, summary, responses } = request;
  const rep = responses["200"];
  console.log(rep);
  const returnType = transformSchemaObj(rep.schema || rep);
  const returnStr = rep.schema?.$ref ? `: Promise<${returnType}>` : "";
  const { cs, ps } = convertParams(parameters);
  const codes: string[] = [
    `export function ${operationId}(${ps}) ${returnStr} {`,
  ];
  codes.push("}");
  const res = `/**
  * ${summary}
  ${cs}
  */
 ${codes.join("\n")}`;
  return res;
}

function convertParams(params: SwaggerRequest["parameters"]) {
  if (!params) {
    return {
      ps: "",
      cs: "",
    };
  }
  let ps = "";
  let cs = "";
  for (let i = 0; i < params.length; i++) {
    if (params[i].in === "header") {
      continue;
    }
    const p = params[i].name;
    const type = transformSchemaObj(params[i].schema || params[i]);
    ps += `,${p}: ${type}`;
    cs += `\n * @param ${p} ${params[i].description || ""}`;
  }
  ps = ps.substring(1);
  cs = cs.substring(1);
  return {
    ps,
    cs,
  };
}