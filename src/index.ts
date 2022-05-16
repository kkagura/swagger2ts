import { transformSchemaObjMap } from "./definitions.js";
import fs from "fs-extra";
import { load, resolve } from "./load.js";
import { convert } from "./transform.js";
const { writeFileSync } = fs;

export async function run(input: string, output: string) {
  const res = await load(input);
  let data = transformSchemaObjMap(res.definitions);
  data += convert(res);
  writeFileSync(output, data);
}
