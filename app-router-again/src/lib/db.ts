import postgres from 'postgres';

export const sql = postgres("postgres://postgres:postgres@0.0.0.0:5432/test-db?sslmode=disable", {
  debug: true,
  prepare: true,
});
