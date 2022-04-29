import parser from "yargs-parser";
import { run } from "../dist/index.js";

const HELP = `Usage
  $ openapi-typescript [input] [options]

Options
  --help, -h                   display this
  --input, -i                  Specify input file
  --output, -o                 Specify output file
`;

const [, , ...args] = process.argv;
const flags = parser(args, {
  array: ["header"],
  boolean: [],
  number: [],
  string: ["auth", "header", "headersObject", "httpMethod", "prettierConfig"],
  alias: {
    help: ["h"],
    output: ["o"],
    input: ["i"],
  },
});

if (flags.help || flags.h) {
  console.log(flags.help, flags.h, "============");
  process.exit(0);
}

run(flags.i, flags.o);
