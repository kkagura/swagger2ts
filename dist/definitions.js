import { addDefinition, getRef } from "./store.js";
import { convertRefKey, isValidName, nodeType, parseSingleSimpleValue, tsUnionOf, } from "./utils.js";
const COMMENT_RE = /\*\//g;
export const LB_RE = /\r?\n/g;
export function transformSchemaObjMap(objMap, root = true) {
    let output = "";
    Object.entries(objMap).forEach(([k, v]) => {
        const comments = createComment(v);
        output += comments;
        output += "\n";
        output += root
            ? nodeType(v) === "array"
                ? `export type ${isValidName(k) ? k : getRef(k)} = `
                : `export interface ${isValidName(k) ? k : getRef(k)}`
            : `${k}: `;
        output += transformSchemaObj(v);
        output += "\n";
    });
    return output;
}
export function transformSchemaObj(node) {
    let type = "";
    switch (nodeType(node)) {
        case "ref": {
            type = convertRefKey(node.$ref);
            addDefinition(type);
            if (!isValidName(type)) {
                type = getRef(type) || "unknown";
            }
            break;
        }
        case "string":
        case "number":
        case "boolean":
        case "unknown": {
            type = nodeType(node);
            break;
        }
        case "const": {
            type += parseSingleSimpleValue(node.const, node.nullable);
            break;
        }
        case "enum": {
            const items = [];
            node.enum.forEach((item) => {
                const value = parseSingleSimpleValue(item, node.nullable);
                items.push(value);
            });
            type = tsUnionOf(items);
            break;
        }
        case "object": {
            type = "{\n" + transformSchemaObjMap(node.properties || {}, false) + "}";
            break;
        }
        case "array": {
            if (!node.items) {
                type = "any[]";
            }
            else if (Array.isArray(node.items)) {
            }
            else {
                type = transformSchemaObj(node.items || {}) + "[]";
            }
            break;
        }
    }
    return type;
}
function createComment(v) {
    const commentsArray = [];
    if (v.title)
        commentsArray.push(`${v.title} `);
    if (v.format)
        commentsArray.push(`Format: ${v.format} `);
    if (v.deprecated)
        commentsArray.push(`@deprecated `);
    const supportedJsDocTags = ["description", "default", "example"];
    for (let index = 0; index < supportedJsDocTags.length; index++) {
        const field = supportedJsDocTags[index];
        if (v[field])
            commentsArray.push(`@${field} ${v[field]} `);
    }
    if (v.const)
        commentsArray.push(`@constant `);
    if (v.enum) {
        const canBeNull = v.nullable ? `|${null}` : "";
        commentsArray.push(`@enum {${v.type}${canBeNull}}`);
    }
    if (!commentsArray.length)
        return "";
    return comment(commentsArray.join("\n"));
}
export function comment(text) {
    const commentText = text.trim().replace(COMMENT_RE, "*\\/");
    if (commentText.indexOf("\n") === -1) {
        return `/** ${commentText} */`;
    }
    return `/**
  * ${commentText.replace(LB_RE, "\n  * ")}
  */`;
}
