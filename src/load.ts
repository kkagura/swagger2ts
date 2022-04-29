import fs from "fs-extra";
import path from "path";
import { Definition } from "types/definitions.js";
import { URL } from "url";

export function load(
  input: string
): Promise<{ definitions: { [k: string]: Definition } }> {
  if (isUrl(input)) {
    return new Promise((resolve) => resolve({ definitions: {} }));
  } else {
    const string = fs.readFileSync(resolve(input)).toString();
    try {
      return new Promise((resolve) =>
        resolve(JSON.parse(string.replace(/«|»/g, "")))
      );
    } catch (error) {
      throw new Error("不合法的JSON文件");
    }
  }
}

function isUrl(input: string): boolean {
  return input.startsWith("http://") || input.startsWith("https://");
}

export function resolve(url: string): URL {
  const localPath = path.isAbsolute(url)
    ? new URL("", `file://${url}`)
    : new URL(url, `file://${process.cwd()}/`);

  if (!fs.existsSync(localPath)) {
    throw new Error(`源文件路径${localPath}不存在`);
  } else if (fs.statSync(localPath).isDirectory()) {
    throw new Error(`源文件路径${localPath}是文件夹`);
  }

  return localPath;
}
