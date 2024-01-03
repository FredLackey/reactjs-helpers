import fs from 'fs';

const getFileContents = (filePath, options, format = 'utf8') => {
  try {
    let contents = fs.readFileSync(filePath, options);
    contents = contents.toString(format);
    return contents;
  } catch (ex) {
    return undefined;
  }
};

export default getFileContents;
