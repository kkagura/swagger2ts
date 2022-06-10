const refMap = Object.create(null);
export function setRef(k, ref) {
    if (!refMap[k]) {
        refMap[k] = ref;
        return ref;
    }
    return refMap[k];
}
export function getRef(k) {
    return refMap[k] || k;
}
let tagsStore = null;
export function setTags(tags) {
    tagsStore = [...tags];
}
export function tagExist(tag) {
    return !tagsStore || tagsStore.includes(tag);
}
const definitions = [];
export function addDefinition(key) {
    if (!definitions.includes(key)) {
        definitions.push(key);
    }
}
export function getDefinitions() {
    return definitions;
}
let mock = true;
export function setMock(m) {
    mock = m;
}
export function getMock() {
    return mock;
}
const pathMap = new Map();
export function addPathMethod(path, method) {
    const methods = pathMap.get(path);
    if (!methods) {
        pathMap.set(path, [method]);
    }
    else {
        methods.push(method);
    }
}
export function methodExist(path, method) {
    var _a;
    if (pathMap.size === 0) {
        return true;
    }
    return !!((_a = pathMap.get(path)) === null || _a === void 0 ? void 0 : _a.includes(method));
}
