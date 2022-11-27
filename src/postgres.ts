import colors from "colors";

import postgresjson from "../env/postgres.json";
import { checkEnv } from "./utils";

export function checkPostgres(): void {
  checkEnv();
  const postgres_array: string[] = postgresjson.postgres_url;

  // check if any of the possible ways is included in the dotenv, if not -> throw an error saying that none is set
  if (!postgres_array.some((key: string) => key in process.env)) {
    console.log(colors.red("PostgresError: None of the Postgres URLs are set"));
    process.exit(1);
  }

  // if one of the possible ways is set, check if it is empty
  postgres_array.forEach((key: string) => {
    if (key in process.env) {
      if (process.env[key] === "") {
        console.log(
          colors.red(`PostgresEmptyError: ${key} is set but string is empty`)
        );
        process.exit(1);
      }
    }
  });

  // return what possible way is set
  const set = postgres_array.filter((key: string) => key in process.env);
  console.log(colors.green(`PostgresURLSuccess: DB option is set via ${set}`));
}
