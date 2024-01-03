import fs from 'fs';

const isFile = filePath => {
  try {
    return fs.lstatSync(filePath).isFile();
  } catch (e) {
    return false;
  }
};

export default isFile;
