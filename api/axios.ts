import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.extrazone.com',
  timeout: 10000,
});

export async function getMethod<T>(methodName: string, params?: any) {
  const headers = {
    'X-Country-Id': 'TR',
    'X-Language-Id': 'TR',
  };

  const response = await instance.get<T>(methodName, {
    method: 'get',
    params,
    headers,
  });

  return response;
}
