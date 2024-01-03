/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.m?js$': 'babel-jest',
  },
};

export default config;