import { convertPath } from "./path.js";
export function convert(swagger, summaries) {
    const { paths } = swagger;
    let res = "";
    Object.keys(paths).forEach((url) => {
        res += convertPath(swagger, paths[url], url);
    });
    return res;
}
