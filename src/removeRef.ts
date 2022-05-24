import Swagger, { ObjectScheme } from "types";
import { convertRefKey } from "./utils.js";

let stackRefs: Array<ObjectScheme> = [];
const circleStub: ObjectScheme = {
  title: "CIRCLE-STUB",
  description: "CIRCLE-STUB",
  type: "object",
  properties: {},
};

export function removeRef(swagger: Swagger) {
  Object.keys(swagger.definitions).forEach((key) => {
    stackRefs = [];
    swagger.definitions[key] = removeWrapper(
      removeRefObjectScheme(swagger, swagger.definitions[key])
    );
  });
}

export function removeWrapper(objectScheme: ObjectScheme): ObjectScheme {
  if (
    objectScheme?.type === "object" &&
    objectScheme.properties?.code &&
    objectScheme.properties?.data &&
    (objectScheme.properties?.msg || objectScheme.properties?.message)
  ) {
    return objectScheme.properties.data;
  }
  return objectScheme;
}

function removeRefObjectScheme(
  swagger: Swagger,
  objectScheme: ObjectScheme
): ObjectScheme {
  if (!objectScheme) {
    return objectScheme;
  }
  stackRefs.push(objectScheme);
  if (objectScheme.$ref) {
    // return removeRefObjectScheme(swagger, objectScheme.$ref);
    const target = swagger.definitions[convertRefKey(objectScheme.$ref)];
    if (stackRefs.includes(target)) {
      return circleStub;
    }
    return target;
  }
  if (objectScheme.type === "object" && objectScheme.properties) {
    Object.keys(objectScheme.properties).forEach((p) => {
      if (objectScheme.properties && objectScheme.properties[p]) {
        objectScheme.properties[p] = removeRefObjectScheme(
          swagger,
          objectScheme.properties[p]
        );
      }
    });
  } else if (objectScheme.type === "array" && objectScheme.items) {
    objectScheme.items = removeRefObjectScheme(swagger, objectScheme.items);
  }
  return objectScheme;
}
