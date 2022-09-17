# loadEnv

# Usage

run loadEnv passing any command which needs the env vars.

For example `loadEnv sh install.sh`


```.env
# .env
TEST="hola mundo"
```
```sh
$ loadEnv env

# ...
# TEST="hola mundo"
# ...
```

# Install

Install from deno.land/x and use it as loadEnv
```sh
deno install --allow-read --allow-env --allow-run --unstable -f -n loadEnv https://deno.land/x/loadenv/main.ts
```
