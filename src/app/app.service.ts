import axios from 'axios';
import queryString, { StringifiableRecord } from 'query-string';
import { API_BASE_URL } from './app.config';

/**
 * HTTP 客户端
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * 本地存储
 */
// eslint-disable-next-line
export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * 读取本地存储
 */
export const getStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

/**
 * 处理地址查询符
 */
export const queryStringProcess = (queryStringObject: StringifiableRecord) => {
  Object.keys(queryStringObject).forEach(key => {
    if (queryStringObject[key] === undefined || queryStringObject[key] === '') {
      delete queryStringObject[key];
    }
  });

  return queryString.stringify(queryStringObject);
};
