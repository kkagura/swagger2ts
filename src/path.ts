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
  const { operationId, parameters = [], summary, responses } = request;
  const rep = responses["200"];
  const returnType = transformSchemaObj(rep.schema || rep);
  console.log(operationId, returnType, rep.schema);
  const returnStr = rep.schema?.$ref ? `<${returnType}>` : "";
  const { comments, params } = convertParams(parameters);
  let bodyData: string[] = [];
  bodyData.push(`url: '${url}'`);
  bodyData.push(`method: '${method}'`);
  const queryParameters = parameters
    .filter((p) => p.in === "query")
    .map((p) => p.name);
  if (queryParameters.length > 0) {
    bodyData.push(`params: {${queryParameters.join(", ")}}`);
  }
  const dataParameters = parameters
    .filter((p) => p.in === "formData" || p.in === "body")
    .map((p) => p.name);
  if (dataParameters.length == 1 && dataParameters[0] === "data") {
    bodyData.push("data");
  } else if (dataParameters.length) {
    bodyData.push(`data: {${dataParameters.join(", ")}}`);
  }

  const codes: string[] = [`export function ${operationId}(${params}) {`];
  codes.push(`return XHR${returnStr}({`);
  codes.push(...bodyData.map((item) => item + ","));
  codes.push("})");
  codes.push("}");
  const res = `/**
  * ${summary}
  ${comments}
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
    params: ps,
    comments: cs,
  };
}
