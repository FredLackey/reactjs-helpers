import path from 'path';

const getFileName = (filePath, includeExtension = true) => {
  try {
    return includeExtension
      ? path.basename(filePath)
      : path.parse(filePath).name;
  } catch (e) {
    return null;
  }
};

export default getFileName;
