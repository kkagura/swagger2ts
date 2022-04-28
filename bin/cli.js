const parser = require("yargs-parser");

const HELP = `Usage
  $ openapi-typescript [input] [options]

Options
  --help, -h                   display this
  --input, -i                  Specify input file
  --output, -o                 Specify output file
`;

const [, , ...args] = process.argv;
console.log(args);
const flags = parser(args, {
  array: ["header"],
  boolean: [],
  number: [],
  string: ["auth", "header", "headersObject", "httpMethod", "prettierConfig"],
  alias: {
    help: ["h"],
    output: ["o"],
  },
});

if (flags.help || flags.h) {
  console.log(flags.help, flags.h, "============");
  process.exit(0);
}
