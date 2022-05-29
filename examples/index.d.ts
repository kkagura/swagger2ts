declare global {
  function XHR<T>(config: any): Promise<T>;
}
export {};
