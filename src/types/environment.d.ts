
export {};

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MONGODB_CONNECT: string;
        ENV: 'test' | 'dev' | 'prod';
      }
    }
  }