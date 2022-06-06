#!/usr/bin/env node

import parser from "yargs-parser";
import { run } from "../dist/index.js";
import fs from "fs-extra";
import path from "path";

const HELP = `
Options
  --version, -v                输出版本号
  --help, -h                   用法参考
  --tag, -t                    开启筛选
  --no-mock, -n                不生成模拟数据
`;

const [, , ...args] = process.argv;
const flags = parser(args, {
  boolean: ["help", "tag", "no-mock", "version"],
  number: [],
  alias: {
    help: ["h"],
    tag: ["t"],
    "no-mock": ["n"],
    version: ["v"],
  },
});

if (flags.help || flags.h) {
  console.log(HELP);
  process.exit(0);
}
if (flags.version) {
  const packageJson = JSON.parse(
    fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
  );
  console.log(packageJson.version);
  process.exit(0);
}
if (flags._.length !== 2) {
  console.log("参数错误，请运行 npx wyyt-swagger-to-ts -h 查看参数列表");
  process.exit(0);
}
const [i, o] = flags._;

run(i, o, {
  tag: flags.tag,
  mock: !flags.n,
});
