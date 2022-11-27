/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
