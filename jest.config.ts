import type {Config} from 'jest';

const config: Config = {
  setupFiles: ['./jest-import.ts'],
};

export default config;