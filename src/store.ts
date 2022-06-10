import { ObjectScheme } from "types";

const refMap: { [k: string]: string } = Object.create(null);
export function setRef(k: string, ref: string): string {
  if (!refMap[k]) {
    refMap[k] = ref;
    return ref;
  }
  return refMap[k];
}

export function getRef(k: string) {
  return refMap[k] || k;
}

let tagsStore: null | string[] = null;
export function setTags(tags: string[]) {
  tagsStore = [...tags];
}
export function tagExist(tag: string) {
  return !tagsStore || tagsStore.includes(tag);
}

const definitions: string[] = [];
export function addDefinition(key: string) {
  if (!definitions.includes(key)) {
    definitions.push(key);
  }
}

export function getDefinitions() {
  return definitions;
}

let mock = true;
export function setMock(m: boolean) {
  mock = m;
}

export function getMock() {
  return mock;
}

const pathMap: Map<string, string[]> = new Map();
export function addPathMethod(path: string, method: string) {
  const methods = pathMap.get(path);
  if (!methods) {
    pathMap.set(path, [method]);
  } else {
    methods.push(method);
  }
}

export function methodExist(path: string, method) {
  if (pathMap.size === 0) {
    return true;
  }
  return !!pathMap.get(path)?.includes(method);
}
