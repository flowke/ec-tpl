export interface ExposedApi {
  ping: () => Promise<string>;
}

declare global {
  interface Window {
    api: ExposedApi;
  }
}

