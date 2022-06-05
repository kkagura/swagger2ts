#!/usr/bin/env node

import parser from "yargs-parser";
import { run } from "../dist/index.js";

const HELP = `Usage
  $ swagger2ts [options]

Options
  --help, -h                   用法参考
  --tag, -t                    开启筛选
  --no-mock, -n                不生成模拟数据
`;

const [, , ...args] = process.argv;
const flags = parser(args, {
  boolean: ["help", "tag", "no-mock"],
  number: [],
  alias: {
    help: ["h"],
    tag: ["t"],
    "no-mock": ["n"],
  },
});
if (flags._.length !== 2) {
  console.log("参数错误，请运行 npx wyyt-swagger-to-ts -h 查看参数列表");
  process.exit(0);
}

if (flags.help || flags.h) {
  console.log(HELP);
  process.exit(0);
}
const [i, o] = flags._;

run(i, o, {
  tag: flags.tag,
  mock: !flags.n,
});
