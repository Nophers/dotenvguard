import colors from "colors";

import mongojson from "../env/mongo.json";
import { checkEnv } from "./utils";

export function checkMongo(): void {
  checkEnv();
  const mongo_array: string[] = mongojson.mongo_urls;

  // check if any of the possible ways is included in the dotenv, if not -> throw an error saying that none is set
  if (!mongo_array.some((key: string) => key in process.env)) {
    console.log(colors.red("MongoError: None of the Mongo URLs are set"));
    process.exit(1);
  }

  // if one of the possible ways is set, check if it is empty
  mongo_array.forEach((key: string) => {
    if (key in process.env) {
      if (process.env[key] === "") {
        console.log(
          colors.red(`MongoEmptyError: ${key} is set but string is empty`)
        );
        process.exit(1);
      }
    }
  });

  // return what possible way is set
  const set = mongo_array.filter((key: string) => key in process.env);
  console.log(colors.green(`MongoURLSuccess: DB option is set via ${set}`));
}
