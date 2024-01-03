import fs from 'fs';

const copyFile = (sourcePath, targetPath) => {
  try {
    fs.copyFileSync(sourcePath, targetPath);
  } catch (e) {
    return false;
  }
  return true;
};

export default copyFile;
