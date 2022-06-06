import { convertRefKey } from "./utils.js";
export default function convertMockObjectType(swagger, key, value, stack = []) {
    if (!value) {
        return undefined;
    }
    if (value.type === "string") {
        if (value.enum) {
            return value.enum;
        }
        const lowerKey = key.toLocaleLowerCase();
        if (["url", "photo", "image", "thumb", "cos", "oss", "img"].some((name) => lowerKey.includes(name))) {
            return `@image('200x100','#4A7BF7','${key}')`;
        }
        if (["date", "time"].some((name) => lowerKey.includes(name))) {
            return "@datetime()";
        }
        if (["name"].some((name) => lowerKey.includes(name))) {
            return "@name()";
        }
        if (["mail"].some((name) => lowerKey.includes(name))) {
            return "@email()";
        }
        if (["mail"].some((name) => lowerKey.includes(name))) {
            return "@email()";
        }
        if (["id"].some((name) => lowerKey.includes(name))) {
            return "@id()";
        }
        if (["detail", "content"].some((name) => lowerKey.includes(name))) {
            return "@sentence()";
        }
        if (["title"].some((name) => lowerKey.includes(name))) {
            return "@title()";
        }
        return "@string()";
    }
    else if (value.type === "integer" ||
        value.type == "number" ||
        value.type == "float" ||
        value.type == "double" ||
        value.type == "long") {
        return "@natural()";
    }
    else if (value.type == "boolean") {
        return "@boolean()";
    }
    else if (value.type === "array") {
        return [convertMockObjectType(swagger, key, value.items, stack)].filter(Boolean);
    }
    else if (value.$ref) {
        if (stack.includes(value.$ref)) {
            return undefined;
        }
        stack.push(value.$ref);
        return convertMockObjectType(swagger, key, swagger.definitions[convertRefKey(value.$ref)], stack);
    }
    else if (value.type === "object" || value.properties) {
        const typeObject = {};
        Object.keys(value.properties || []).forEach((key) => {
            let objKey = key;
            if (value.properties[key].enum) {
                objKey += "|1";
            }
            else if (value.properties[key].type === "array") {
                objKey += "|10-20";
            }
            const objValue = convertMockObjectType(swagger, key, value.properties[key], stack);
            if (objValue) {
                typeObject[objKey] = objValue;
            }
        });
        return typeObject;
    }
    return undefined;
}
