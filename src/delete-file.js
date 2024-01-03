import fs from 'fs';
import isFile from './is-file';

const deleteFile = (filePath, missingOkay = true) => {
  if (!isFile(filePath)) { return (missingOkay === true); }
  try {
    fs.unlinkSync(filePath);
    return (!isFile(filePath));
  } catch (ex) {
    return (!isFile(filePath));
  }
};

export default deleteFile;
