import { convertPath } from "./path.js";
import Swagger from "types";

export function convert(swagger: Swagger, summaries?: string[]) {
  const { paths } = swagger;
  let res = "";
  Object.keys(paths).forEach((url) => {
    res += convertPath(paths[url], url);
  });
  return res;
}
