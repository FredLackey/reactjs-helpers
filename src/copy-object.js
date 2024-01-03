import stringify from "./stringify";

const copyObject = item => {
  return JSON.parse(stringify(item));
};

export default copyObject;
