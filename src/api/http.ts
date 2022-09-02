import {config} from "../config";

type Headers = { [key: string]: string }

const baseUrl = config.api

const get = async <T>(url: string, headers?: Headers) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'GET',
    headers: {...headers}
  })
  return await response.json() as T
}

const post = async <T, K>(url: string, body: K, headers?: Headers) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await response.json() as T
}

const put = async <T, K>(url: string, body: K, headers?: Headers) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return await response.json() as T
}

const _delete = async <T>(url: string, headers?: Headers) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
    headers: {...headers}
  })
  return await response.json() as T
}

export const http = {
  get,
  post,
  put,
  delete: _delete
}
