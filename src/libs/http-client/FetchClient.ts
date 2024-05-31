// eslint-disable-next-line max-classes-per-file
import type HTTPClient from './HTTPClient.js';
import type { HTTPClientBuilder, Filter } from './HTTPClient.js';

const identifier: Filter = (_) => _;

export default class FetchClient implements HTTPClient {
  _baseUrl = '';

  _header = {};

  _successFilter = identifier;

  _failFilter = identifier;

  set baseUrl(url: string) {
    this._baseUrl = url;
  }

  set header(config: Object) {
    this._header = config;
  }

  set failFilter(filter: Filter) {
    this._failFilter = filter;
  }

  set successFilter(filter: Filter) {
    this._successFilter = filter;
  }

  get(url, config): Promise<unknown> {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'GET',
      credentials: 'include',
      headers: { ...this._header, ...config },
    }).then((res) =>
      res.status !== 200
        ? res.json().then((result) => this._failFilter(result))
        : res.json().then((result) => this._successFilter(result)),
    );
  }

  post(url, body, config): Promise<unknown> {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
      credentials: 'include',
      headers: { ...this._header, ...config },
    }).then((res) =>
      res.status !== 200
        ? res.json().then((result) => this._failFilter(result))
        : res.json().then((result) => this._successFilter(result)),
    );
  }

  put(url, body, config): Promise<unknown> {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'PUT',
      body: body instanceof FormData ? body : JSON.stringify(body),
      credentials: 'include',
      headers: { ...this._header, ...config },
    }).then((res) =>
      res.status !== 200
        ? res.json().then((result) => this._failFilter(result))
        : res.json().then((result) => this._successFilter(result)),
    );
  }

  patch(url, body, config): Promise<unknown> {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'PATCH',
      body: body instanceof FormData ? body : JSON.stringify(body),
      credentials: 'include',
      headers: { ...this._header, ...config },
    }).then((res) =>
      res.status !== 200
        ? res.json().then((result) => this._failFilter(result))
        : res.json().then((result) => this._successFilter(result)),
    );
  }

  delete(url: string, config?: Object | undefined): Promise<unknown> {
    return fetch(`${this._baseUrl}${url}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { ...this._header, ...config },
    }).then((res) =>
      res.status !== 200
        ? res.json().then((result) => this._failFilter(result))
        : res.json().then((result) => this._successFilter(result)),
    );
  }
}

export class FetchClientBuilder implements HTTPClientBuilder {
  private readonly instance: FetchClient;

  constructor() {
    this.instance = new FetchClient();
  }

  setBaseUrl(url: string): HTTPClientBuilder {
    this.instance.baseUrl = url;
    return this;
  }

  setHeader(config: Object): HTTPClientBuilder {
    this.instance.header = config;
    return this;
  }

  setFailFilter(filter: Filter): HTTPClientBuilder {
    this.instance.failFilter = filter;
    return this;
  }

  setSuccessFilter(filter: Filter): HTTPClientBuilder {
    this.instance.successFilter = filter;
    return this;
  }

  build(): HTTPClient {
    return this.instance;
  }
}
