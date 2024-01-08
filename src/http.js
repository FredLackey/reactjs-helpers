import removePrefix from './remove-prefix';
import removeSuffix from './remove-suffix';
import isValidString from './is-valid-string';
import isObject from './is-object';
import { Buffer } from "buffer";

const IS_EMPTY_STRING_OKAY = true;

const toUrl = (value = '/') => {

  let url = value;
      url = removePrefix(url, '/');
      url = removeSuffix(url, '/');

  return url.toLowerCase().startsWith('http')
    ? url
    :  `http://${url}`;
};
const toBody = value => {
  if (isObject(value)) {
    return JSON.stringify(value);
  }
  if (isValidString(value)) {
    return value;
  }
  return undefined;
};

const addHeaders = (creds = {}, headers = {}) => {

  const {
    user, pass, password, token,
  } = creds;

  const result = { 'Content-Type': 'application/json' };
  if (user || pass || password) {
    result.Authorization = `Basic ${Buffer.from(`${user}:${pass || password}`).toString('base64')}`;
  }
  if (token) {
    result.Authorization = `Bearer ${token}`;
  }

  Object.keys(headers)
    .filter(key => (key && isValidString(headers[key], IS_EMPTY_STRING_OKAY)))
    .forEach(key => {
      result[key] = headers[key];
    });

  return result;
};

const doPromise = async ({ method = 'GET', url, data, creds = {}, headers = {} }) => {
  
  url = toUrl(url);

  try {
    const response = await fetch(url, {
      method,
      body   : toBody(data),
      headers: addHeaders(creds, headers),
    });
    const json   = await response.json();
    const status = response.status;
    const ok     = status >= 200 && status < 300;
    const body   = ok ? json : null;
    const error  = ok ? null : json;
    return {
      ok,
      status,
      data: body,
      error
    };
  } catch (ex) {
    return {
      ok    : false,
      status: -1,
      data  : null,
      error : `Failure calling ${url}`,
      debug : ex
    };
  }

};

export const doGet = async (url, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({ url, creds, headers });
    return response;
  } catch (ex) {
    console.debug(`doGet Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
export const doPost = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({
      method: 'POST', url, data, creds, headers,
    });
    return response;
  } catch (ex) {
    console.debug(`doPost Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
export const doPut = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({
      method: 'PUT', url, data, creds, headers,
    });
    return response;
  } catch (ex) {
    console.debug(`doPut Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};
export const doDelete = async (url, data, creds = {}, headers = {}) => {
  try {
    const response = await doPromise({
      method: 'DELETE', url, data, creds, headers,
    });
    return response;
  } catch (ex) {
    console.debug(`doDelete Error calling ${url}`);
    console.debug(ex);
    return null;
  }
};

export const ping = async (creds = {}, headers = {}) => {
  const response = await doGet('/', creds, headers);
  return response || 'FAILURE';
};

export default {
  ping,

  doGet,
  doPost,
  doPut,
  doDelete,
};
