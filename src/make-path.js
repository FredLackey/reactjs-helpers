import fs from 'fs';
import isDir from './is-directory';

const makePath = dirPath => {
  if (isDir(dirPath)) { return true; }
  try {
    fs.mkdirSync(dirPath, { recursive: true });
    return isDir(dirPath);
  } catch (e) {
    return false;
  }
};

export default makePath;
