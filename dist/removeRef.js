import { convertRefKey } from "./utils.js";
let stackRefs = [];
const circleStub = {
    title: "CIRCLE-STUB",
    description: "CIRCLE-STUB",
    type: "object",
    properties: {},
};
export function removeRef(swagger) {
    Object.keys(swagger.definitions).forEach((key) => {
        stackRefs = [];
        swagger.definitions[key] = removeWrapper(removeRefObjectScheme(swagger, swagger.definitions[key]));
    });
}
export function removeWrapper(objectScheme) {
    var _a, _b, _c;
    if ((objectScheme === null || objectScheme === void 0 ? void 0 : objectScheme.type) === "object" &&
        ((_a = objectScheme.properties) === null || _a === void 0 ? void 0 : _a.code) &&
        (((_b = objectScheme.properties) === null || _b === void 0 ? void 0 : _b.msg) || ((_c = objectScheme.properties) === null || _c === void 0 ? void 0 : _c.message))) {
        return objectScheme.properties.data;
    }
    return objectScheme;
}
function removeRefObjectScheme(swagger, objectScheme) {
    if (!objectScheme) {
        return objectScheme;
    }
    stackRefs.push(objectScheme);
    if (objectScheme.$ref) {
        const target = swagger.definitions[convertRefKey(objectScheme.$ref)];
        if (stackRefs.includes(target)) {
            return circleStub;
        }
        return target;
    }
    if (objectScheme.type === "object" && objectScheme.properties) {
        Object.keys(objectScheme.properties).forEach((p) => {
            if (objectScheme.properties && objectScheme.properties[p]) {
                objectScheme.properties[p] = removeRefObjectScheme(swagger, objectScheme.properties[p]);
            }
        });
    }
    else if (objectScheme.type === "array" && objectScheme.items) {
        objectScheme.items = removeRefObjectScheme(swagger, objectScheme.items);
    }
    return objectScheme;
}
