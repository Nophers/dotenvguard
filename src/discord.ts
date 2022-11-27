import colors from "colors";

import discordjson from "../env/discord.json";
import { checkEnv } from "./utils";

export function checkDiscord(): void {
  checkEnv();
  const discord_array: string[] = discordjson.discord_urls;

  // check if any of the possible ways is included in the dotenv, if not -> throw an error saying that none is set
  if (!discord_array.some((key: string) => key in process.env)) {
    console.log(colors.red("DiscordError: None of the Discord options are set"));
    process.exit(1);
  }

  // if one of the possible ways is set, check if it is empty
  discord_array.forEach((key: string) => {
    if (key in process.env) {
      if (process.env[key] === "") {
        console.log(
          colors.red(`DiscordEmptyError: ${key} is set but string is empty`)
        );
        process.exit(1);
      }
    }
  });

  // return what possible way is set
  const set = discord_array.filter((key: string) => key in process.env);
  console.log(colors.green(`DiscordURLSuccess: Discord option is set via ${set}`));
}