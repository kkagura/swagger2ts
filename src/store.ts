const refMap: { [k: string]: string } = Object.create(null);
export function setRef(k: string, ref: string) {
  refMap[k] = ref;
}

export function getRef(k: string) {
  return refMap[k] || k;
}

const summaries: null | string[] = null;
export function summaryExist(summary: string) {
  return !summaries || summaries.includes(summary);
}
