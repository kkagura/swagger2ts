const refMap: { [k: string]: string } = Object.create(null);
export function setRef(k: string, ref: string) {
  refMap[k] = ref;
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
