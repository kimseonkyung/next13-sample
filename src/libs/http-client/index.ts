import type { HTTPClientBuilder } from './HTTPClient';
import { FetchClientBuilder } from './FetchClient';

export function createHttpClient(): HTTPClientBuilder {
  const builder: HTTPClientBuilder = new FetchClientBuilder();

  return builder.setSuccessFilter((body) => body).setFailFilter((body) => Promise.reject(body));
}
