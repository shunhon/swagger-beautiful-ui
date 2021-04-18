import yaml from "js-yaml";
// import converter from "swagger2openapi";

export function loadSwagger(swagger: string): any {
  // FIXME: bind swagger type
  let result = parseYaml(swagger);
  if (!result) {
    result = parseJson(swagger);
  }
  if (!result) {
    return null;
  }
  return result;
}

function parseYaml(swagger: string): any {
  try {
    return yaml.load(swagger);
  } catch (err) {
    return null;
  }
}

function parseJson(swagger: string) {
  try {
    return JSON.parse(swagger);
  } catch (err) {
    return null;
  }
}
