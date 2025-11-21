// src/lib/env.ts
/**
 * Helper to safely retrieve required environment variables.
 * Throws a descriptive error if the variable is undefined.
 */
export function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not defined in the environment`);
  }
  return value;
}
