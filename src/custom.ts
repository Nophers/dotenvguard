import colors from "colors";

import { checkEnv } from "./utils";

/**
 * Checks if the environment variables are set
 * @returns The value of the environment variable
 * @throws {Error} if the environment variable is not set
 */
export function customCheck(key: string): void {
  checkEnv();

  const keyword: string = key;

  if (!(keyword in process.env)) {
    throw new Error(colors.red(`CustomError: ${keyword} is not set`));
  }

  if (process.env[keyword] === "") {
    throw new Error(
      colors.red(`CustomEmptyError: ${keyword} is set but string is empty`)
    );
  }

  console.log(colors.green(`CustomSuccess: ${keyword} is set`));
}

/**
 * Checks if the environment variables are set
 * @param keys The environment variables to check (array)
 */
export function customChecks(keys: string[]): void {
  checkEnv();
  const keywords: string[] = keys;

  keywords.forEach((keyword) => {
    if (!(keyword in process.env)) {
      throw new Error(
        colors.red(colors.red(`CustomError: ${keyword} is not set`))
      );
    }

    if (process.env[keyword] === "") {
      throw new Error(
        colors.red(`CustomEmptyError: ${keyword} is set but string is empty`)
      );
    }

    console.log(colors.green(`CustomSuccess: ${keyword} is set`));
  });
}
