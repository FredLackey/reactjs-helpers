import isUidFormat from "./is-uid-format";

const getUid = (itemOrUid) => {

  if (isUidFormat(itemOrUid)) {
    return itemOrUid;
  }
  if (isUidFormat(itemOrUid?.uid)) {
    return itemOrUid.uid;
  }

  return undefined;

};

export default getUid;
