import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

const runReadEnv = `run -A --unstable ./readEnv.ts`

Deno.test(
  {
    name: "readEnv.ts",
    fn: () => {
      const { code, stderr, stdout } =
        Deno.spawnSync('deno', {
          args: runReadEnv.split(' '),
          // clearEnv: true,
          env: { TEST: 'test' }
        });
      const output = new TextDecoder().decode(stdout);

      const error = new TextDecoder().decode(stderr);
      assertEquals(code, 0);
      assertEquals(output, 'test\n');
      assertEquals(error, '');

    }
  }
);

Deno.test('main.ts', function () {
  const runMain = `run -A --unstable ./main.ts`;

  const args = `${runMain} deno ${runReadEnv}`.split(' ');

  const { code, stdout, stderr } = Deno.spawnSync('deno', { args, cwd: Deno.cwd() });

  const output = new TextDecoder().decode(stdout);

  console.log(output);
  const error = new TextDecoder().decode(stderr);

  assertEquals(error, '');
  assertEquals(code, 0);
  assertEquals(output.includes('hello'), true);


});
