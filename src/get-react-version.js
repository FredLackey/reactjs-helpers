import React from 'react';

const getReactVersion = () => {
  try {
    return React.version;
  } catch (ex) {
    return null;
  }
};

export default getReactVersion;
