import dotenv from "dotenv";
import path from "path";
import colors from "colors";

/**
 * Check if the .env file exists
 * @returns {string} :message if key is set and valid (not empty)
 * @throws {Error} if the .env file does not exist or is empty
 */

export function checkEnv() {
  const envPath = path.resolve(process.cwd(), ".env");
  const envExists = dotenv.config({ path: envPath });
  if (envExists.error) {
    throw new Error(colors.red("EnvError: .env file not found"));
  }
}

function envVariables() {
  checkEnv();
  const env = dotenv.config().parsed;
  console.log(colors.green("Environment variables:"));
  console.log(env);
}
