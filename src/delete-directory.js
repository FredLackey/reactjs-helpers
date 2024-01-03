import * as rimraf from 'rimraf';
import isDirectory from './is-directory';

const deleteDirectory = (folderPath) => {
  if (!isDirectory(folderPath)) {
    return true;
  }
  try {
    rimraf.sync(folderPath);
    return (!isDirectory(folderPath));
  } catch (ex) {
    console.debug(ex);
    return (!isDirectory(folderPath));
  }
};

export default deleteDirectory;
