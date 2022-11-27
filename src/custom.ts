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
    console.log(colors.red(`CustomError: ${keyword} is not set`));
    process.exit(1);
  }

  if (process.env[keyword] === "") {
    console.log(
      colors.red(`CustomEmptyError: ${keyword} is set but string is empty`)
    );
    process.exit(1);
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
      console.log(colors.red(`CustomError: ${keyword} is not set`));
      process.exit(1);
    }

    if (process.env[keyword] === "") {
      console.log(
        colors.red(`CustomEmptyError: ${keyword} is set but string is empty`)
      );
      process.exit(1);
    }

    console.log(colors.green(`CustomSuccess: ${keyword} is set`));
  });
}
