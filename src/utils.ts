import { ObjectScheme } from "types";

const SINGLE_QUOTE_RE = /'/g;
type SchemaObjectType =
  | "anyOf"
  | "array"
  | "boolean"
  | "const"
  | "enum"
  | "number"
  | "object"
  | "oneOf"
  | "ref"
  | "string"
  | "unknown";

export function nodeType(obj: any): SchemaObjectType {
  if (!obj || typeof obj !== "object") {
    return "unknown";
  }

  if (obj.$ref) {
    return "ref";
  }

  // const
  if (obj.const) {
    return "const";
  }

  // enum
  if (Array.isArray(obj.enum) && obj.enum.length) {
    return "enum";
  }

  // boolean
  if (obj.type === "boolean") {
    return "boolean";
  }

  // string
  if (
    obj.type === "string" ||
    obj.type === "binary" ||
    obj.type === "byte" ||
    obj.type === "date" ||
    obj.type === "dateTime" ||
    obj.type === "password"
  ) {
    return "string";
  }

  // number
  if (
    obj.type === "integer" ||
    obj.type === "number" ||
    obj.type === "float" ||
    obj.type === "double"
  ) {
    return "number";
  }

  // array
  if (obj.type === "array" || obj.items) {
    return "array";
  }

  // object
  if (
    obj.type === "object" ||
    obj.hasOwnProperty("allOf") ||
    obj.hasOwnProperty("anyOf") ||
    obj.hasOwnProperty("oneOf") ||
    obj.hasOwnProperty("properties") ||
    obj.hasOwnProperty("additionalProperties")
  ) {
    return "object";
  }

  // return unknown by default
  return "unknown";
}

export type ParsedSimpleValue = string | number | boolean;

/**
 * For parsing CONST / ENUM single values
 * @param value - node.const or node.enum[I] for parsing
 * @param isNodeNullable  - node.nullable
 * @returns parsed value
 */
export function parseSingleSimpleValue(
  value: unknown,
  isNodeNullable = false
): ParsedSimpleValue {
  if (typeof value === "string")
    return `'${value.replace(SINGLE_QUOTE_RE, "\\'")}'`;

  if (typeof value === "number" || typeof value === "boolean") return value;

  if (typeof value === "object") return JSON.stringify(value);

  if (value === null && !isNodeNullable) return "null";

  // Edge case
  return `${value}`;
}

export function tsUnionOf(types: Array<string | number | boolean>): string {
  if (!types.length) return "undefined"; // usually oneOf with empty input - so it's undefined

  if (types.length === 1) return `${types[0]}`; // don’t add parentheses around one thing
  return `(${types.join(") | (")})`;
}
const DEFINITION_PREFIX = "#/definitions/";
export function convertRefKey(ref: string) {
  return ref.substring(DEFINITION_PREFIX.length);
}

export function isValidName(name: string) {
  return /^[a-zA-Z]+[a-zA-Z0-9_]*$/.test(name);
}

export function upperFirst(str: string) {
  return str.at(0)?.toUpperCase() + str.substring(1);
}

export function collectRefType(value: ObjectScheme) {
  const res: string[] = [];
  if (!value) return res;
  if (value.$ref) {
    res.push(convertRefKey(value.$ref));
  } else if (value.type === "array") {
    res.push(...collectRefType(value.items || {}));
  } else if (value.type === "object" || value.properties) {
    Object.keys(value.properties || {}).forEach((key) => {
      res.push(...collectRefType(value.properties![key]));
    });
  }
  return res.reduce((pre, curr) => {
    if (!pre.includes(curr)) {
      pre.push(curr);
    }
    return pre;
  }, [] as string[]);
}
