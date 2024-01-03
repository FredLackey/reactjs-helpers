import isValidString from "./is-valid-string";
import isObject from "./is-object";
import isNumber from "./is-number";
import isDefined from "./is-defined";
import copyObject from "./copy-object";

const KEYS = ['id', '_id'];

const getId = (itemOrId) => {

  if (!isDefined(itemOrId)) {
    return undefined;
  } 

  if (isNumber(itemOrId) || isValidString(itemOrId)) {
    return itemOrId;
  }

  if (!isObject(itemOrId)) {
    return undefined;
  }

  const copy = copyObject(itemOrId);

  const key = KEYS.find(x => (
    x && (isNumber(copy[x]) || isValidString(copy[x]))
  ));

  return key
    ? copy[key]
    : undefined;
};

export default getId;
