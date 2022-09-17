import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

// const args = Deno.args

export function loadEnv() {
  const env = config();
  // for (const key in env) {
  //   Deno.env.set(key, env[key]);
  //   // console.log(key, env[key]);

  // }

  // const [command, ...args] = Deno.args
  // const { code, stdout, stderr } = Deno.spawnSync(command, { args, env, clearEnv: false });

  // const args = ['-c', ...Deno.args]
  const args = ['-c', Deno.args.join(' ')]
  // Deno.spawnSync('sh', { args, env, clearEnv: false });
  // console.log({args});


  const { code, stdout, stderr } = Deno.spawnSync('sh', { args, env, clearEnv: false, cwd: Deno.cwd() });
  const output = new TextDecoder().decode(stdout);
  console.log(output);

  // const error = new TextDecoder().decode(stderr);
  // console.log({error, code});



}

loadEnv();
