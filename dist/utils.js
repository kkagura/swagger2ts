const SINGLE_QUOTE_RE = /'/g;
export function nodeType(obj) {
    if (!obj || typeof obj !== "object") {
        return "unknown";
    }
    if (obj.$ref) {
        return "ref";
    }
    if (obj.const) {
        return "const";
    }
    if (Array.isArray(obj.enum) && obj.enum.length) {
        return "enum";
    }
    if (obj.type === "boolean") {
        return "boolean";
    }
    if (obj.type === "string" ||
        obj.type === "binary" ||
        obj.type === "byte" ||
        obj.type === "date" ||
        obj.type === "dateTime" ||
        obj.type === "password") {
        return "string";
    }
    if (obj.type === "integer" ||
        obj.type === "number" ||
        obj.type === "float" ||
        obj.type === "double") {
        return "number";
    }
    if (obj.type === "array" || obj.items) {
        return "array";
    }
    if (obj.type === "object" ||
        obj.hasOwnProperty("allOf") ||
        obj.hasOwnProperty("anyOf") ||
        obj.hasOwnProperty("oneOf") ||
        obj.hasOwnProperty("properties") ||
        obj.hasOwnProperty("additionalProperties")) {
        return "object";
    }
    return "unknown";
}
export function parseSingleSimpleValue(value, isNodeNullable = false) {
    if (typeof value === "string")
        return `'${value.replace(SINGLE_QUOTE_RE, "\\'")}'`;
    if (typeof value === "number" || typeof value === "boolean")
        return value;
    if (typeof value === "object")
        return JSON.stringify(value);
    if (value === null && !isNodeNullable)
        return "null";
    return `${value}`;
}
export function tsUnionOf(types) {
    if (!types.length)
        return "undefined";
    if (types.length === 1)
        return `${types[0]}`;
    return `(${types.join(") | (")})`;
}
const DEFINITION_PREFIX = "#/definitions/";
export function convertRefKey(ref) {
    return ref.substring(DEFINITION_PREFIX.length);
}
export function createRefName(definitionName) {
    return DEFINITION_PREFIX + definitionName;
}
export function isValidName(name) {
    return /^[a-zA-Z]+[a-zA-Z0-9_]*$/.test(name);
}
export function upperFirst(str) {
    var _a;
    return ((_a = str[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + str.substring(1);
}
export function collectRefType(value) {
    const res = [];
    if (!value)
        return res;
    if (value.$ref) {
        res.push(convertRefKey(value.$ref));
    }
    else if (value.type === "array") {
        res.push(...collectRefType(value.items || {}));
    }
    else if (value.type === "object" || value.properties) {
        Object.keys(value.properties || {}).forEach((key) => {
            res.push(...collectRefType(value.properties[key]));
        });
    }
    return res.reduce((pre, curr) => {
        if (!pre.includes(curr)) {
            pre.push(curr);
        }
        return pre;
    }, []);
}
