import fs from "fs-extra";
import path from "path";
import Swagger from "./types/index";
import { URL } from "url";
import undici from "undici";
import ora from "ora";

export function load(input: string): Promise<Swagger> {
  if (isUrl(input)) {
    return fetch(input);
  } else {
    const string = fs.readFileSync(resolve(input)).toString();
    try {
      return new Promise((resolve) => resolve(parseJson(string)));
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

function parseJson(text: string) {
  return JSON.parse(text.replace(/«|»/g, ""));
}

function fetch(url: string) {
  const spinner = ora(`正在请求${url}`).start();
  return undici
    .request(url)
    .then((res) => {
      return res.body.text().then((text) => {
        try {
          return parseJson(text);
        } catch (error) {
          return Promise.reject(new Error("不合法的JSON文件"));
        }
      });
    })
    .finally(() => {
      spinner.stop();
    });
}
