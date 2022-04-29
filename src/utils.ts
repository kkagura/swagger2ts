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
