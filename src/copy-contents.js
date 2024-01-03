import fs from 'fs';
import os from 'os';
import readline from 'readline';

const copyContents = async (sourceFile, destinationFile) => {
  const inStream  = fs.createReadStream(sourceFile);
  const inFile    = await readline.createInterface({
    input: inStream,
    crlfDelay: Infinity,
  });
  const outStream = fs.createWriteStream(destinationFile);

  /* eslint-disable */
  for await (const line of inFile) {
    await outStream.write(line + os.EOL);
  }
  /* eslint-enable */

  await outStream.end();
  await outStream.close();
};

export default copyContents;
