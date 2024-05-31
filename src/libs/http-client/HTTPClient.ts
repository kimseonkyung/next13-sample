export default interface HTTPClient {
  get(url: string, config?: Object): Promise<unknown>;

  post(url: string, body?: Object, config?: Object): Promise<unknown>;

  put(url: string, body?: Object, config?: Object): Promise<unknown>;

  patch(url: string, body?: Object, config?: Object): Promise<unknown>;

  delete(url: string, config?: Object): Promise<unknown>;
}

export type Filter = (result: Record<string, unknown>) => Record<string, unknown>;

export interface HTTPClientBuilder {
  setBaseUrl(url: string): HTTPClientBuilder;

  setHeader(config: Object): HTTPClientBuilder;

  setSuccessFilter(filter: Filter): HTTPClientBuilder;

  setFailFilter(filter: Filter): HTTPClientBuilder;

  build(): HTTPClient;
}
