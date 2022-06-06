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
        swagger.definitions[key] = removeWrapper(removeRefObjectScheme(swagger, swagger.definitions[key]), swagger);
    });
}
export function removeWrapper(objectScheme, swagger) {
    var _a, _b, _c, _d, _e;
    if ((objectScheme === null || objectScheme === void 0 ? void 0 : objectScheme.type) === "object" &&
        ((_a = objectScheme.properties) === null || _a === void 0 ? void 0 : _a.code) &&
        (((_b = objectScheme.properties) === null || _b === void 0 ? void 0 : _b.msg) || ((_c = objectScheme.properties) === null || _c === void 0 ? void 0 : _c.message))) {
        if ((_d = objectScheme.properties.data) === null || _d === void 0 ? void 0 : _d.$ref) {
            return swagger.definitions[convertRefKey((_e = objectScheme.properties.data) === null || _e === void 0 ? void 0 : _e.$ref)];
        }
        return objectScheme.properties.data;
    }
    return objectScheme;
}
function removeRefObjectScheme(swagger, objectScheme) {
    return objectScheme;
}
