/// <reference types="vite/client" />
import "react";

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    command?: string;
    commandfor?: string;
  }
}

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
