import { env } from '@base/utils/env';

export const dbConfig = {
  dbConnection: env('TYPEORM_CONNECTION'),
  dbUrl: env("TYPEORM_URL"),
  dbEntities: env('TYPEORM_ENTITIES'),
  allowLogging: env('TYPEORM_LOGGING'),
};
