import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load, resolve } from "./load.js";
const { writeFileSync } = fs;

export async function run(input: string, output: string) {
  const res = await load(input);
  const data = transformSchemaObjMap(res.definitions);
  writeFileSync(output, data);
}
