# <p align="center">envguard</p>

[![Discord](https://img.shields.io/discord/823720615965622323.svg?style=for-the-badge)](https://discord.gg/UDNcTrBagN)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/vkxni)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](https://github.com/alelievr/Mixture/blob/master/LICENSE)

<p align="center">An up-2-date guard for your environment variables.</p>

<p align="center">
<img src="envguard.png"  alt="envguard" width="250" height="220"/></a>
<p>

---

## Installation

npm
```bash
$ npm install envguard
```

yarn
```bash
$ yarn add envguard
```

pnpm
```bash
$ pnpm add envguard
```

### Usage

PostgreSQL 
```ts
import { checkPostgres } from '@vkxni/envguard';

checkPostgres();
```

MongoDB
```ts
import { checkMongo } from '@vkxni/envguard';

checkMongo();
```

Discord 
```ts
import { checkDiscord } from '@vkxni/envguard';

checkDiscord();
```

---

> Custom Checks with own keyword(s)

Single
```ts
import { customCheck } from '@vkxni/envguard';

customCheck("SOME_KEYWORD");
```

Array
```ts
import { customChecks } from '@vkxni/envguard';

customChecks(["SOME_KEYWORD", "ANOTHER_KEYWORD"]);
```

---

#### Errors

`EnvError:` .env file not found

`<>Error:` Missing environment variable: **variable**

`<>EmptyError:` Environment variable is empty: **""**

`<>Success:` Environment variable is set: <variable>

