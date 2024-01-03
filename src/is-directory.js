import fs from 'fs';

const isDirectory = dirPath => {
  try {
    return fs.lstatSync(dirPath).isDirectory();
  } catch (e) {
    return false;
  }
};

export default isDirectory;
