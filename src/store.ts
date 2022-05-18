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
