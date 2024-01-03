import crypto from 'crypto';

const getHash = value => crypto.createHash('md5').update(value).digest('hex');

export default getHash;
