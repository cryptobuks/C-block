/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BACKEND_ORIGIN: string;
    readonly REACT_APP_BACKEND_BASE_URL: string;
    readonly REACT_APP_PUBLIC_DOMAIN: string;
    readonly REACT_APP_USERPILOT_TOKEN: string;
  }
}
