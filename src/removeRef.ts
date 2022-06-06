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
      removeRefObjectScheme(swagger, swagger.definitions[key]),
      swagger
    );
  });
}

export function removeWrapper(
  objectScheme: ObjectScheme,
  swagger: Swagger
): ObjectScheme {
  if (
    objectScheme?.type === "object" &&
    objectScheme.properties?.code &&
    (objectScheme.properties?.msg || objectScheme.properties?.message)
  ) {
    if (objectScheme.properties.data?.$ref) {
      return swagger.definitions[
        convertRefKey(objectScheme.properties.data?.$ref)
      ];
    }
    return objectScheme.properties.data;
  }
  return objectScheme;
}

function removeRefObjectScheme(
  swagger: Swagger,
  objectScheme: ObjectScheme
): ObjectScheme {
  // if (!objectScheme) {
  //   return objectScheme;
  // }
  // stackRefs.push(objectScheme);
  // if (objectScheme.$ref) {
  //   // return removeRefObjectScheme(swagger, objectScheme.$ref);
  //   const target = swagger.definitions[convertRefKey(objectScheme.$ref)];
  //   if (stackRefs.includes(target)) {
  //     console.log(target);
  //     return circleStub;
  //   }
  //   return target;
  // }
  // if (objectScheme.type === "object" && objectScheme.properties) {
  //   Object.keys(objectScheme.properties).forEach((p) => {
  //     if (objectScheme.properties && objectScheme.properties[p]) {
  //       objectScheme.properties[p] = removeRefObjectScheme(
  //         swagger,
  //         objectScheme.properties[p]
  //       );
  //     }
  //   });
  // } else if (objectScheme.type === "array" && objectScheme.items) {
  //   objectScheme.items = removeRefObjectScheme(swagger, objectScheme.items);
  // }
  return objectScheme;
}
