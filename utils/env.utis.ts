export const getEnvVariable = (key: string) => {
  return process.env[key] || "";
};
