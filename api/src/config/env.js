import 'pg';

export const env = {
  PORT: process.env.PORT || 3000,
  user: process.env.POSTGRESDB_USER,
  host: process.env.POSTGRESDB_HOST,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASS,
  POSTGRES_URI: process.env.POSTGRES_URI,
  REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "6379",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "6379",
};
