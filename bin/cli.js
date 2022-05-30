import parser from "yargs-parser";
import { run } from "../dist/index.js";

const HELP = `Usage
  $ swagger2ts [options]

Options
  --help, -h                   display this
  --input, -i                  Specify input file
  --output, -o                 Specify output file
  --tag, -t
  --list, -l
`;

const [, , ...args] = process.argv;
const flags = parser(args, {
  boolean: ["help", "tag"],
  number: [],
  alias: {
    help: ["h"],
    output: ["o"],
    input: ["i"],
    tag: ["t"],
    list: ["l"],
  },
});

if (flags.help || flags.h) {
  console.log(HELP);
  process.exit(0);
}

run(flags.i, flags.o, flags.t);
