import newGuid from "./new-guid";

const newUid = () => {
  const guid = newGuid();
  return guid.split('-').join('').toUpperCase();
};

export default newUid;
