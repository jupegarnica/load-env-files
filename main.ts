import { config } from "https://deno.land/std@0.156.0/dotenv/mod.ts?s=config";

export async function loadEnv() {
  const env = await config();
  const args = ['-c', Deno.args.join(' ')]


  const { code, stdout, stderr } = Deno.spawnSync('sh', { args, env, clearEnv: false, cwd: Deno.cwd() });
  const output = new TextDecoder().decode(stdout);
  console.log(output);
  const error = new TextDecoder().decode(stderr);
  if (error) {
    console.error(error);
  }
  if (code !== 0) {
    Deno.exit(code);
  }
}

await loadEnv();
