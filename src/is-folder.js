import fs from 'fs';

const isFolder = filePath => {
  try {
    return fs.lstatSync(filePath).isDirectory();
  } catch (e) {
    return false;
  }
};

export default isFolder;
