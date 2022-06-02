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
