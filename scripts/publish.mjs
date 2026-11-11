// nginx on the server serves the repo root, so copy the prerendered site there.
// Precompressed .br/.gz files are skipped; `postach.io/` is left untouched.
import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';

const from = 'dist/web';
const outputs = ['index.html', '404.html', '__elements.json', 'avatar.png', 'static'];

for (const name of outputs) rmSync(name, { recursive: true, force: true });

for (const name of readdirSync(from)) {
  if (/\.(br|gz)$/.test(name)) continue;
  if (!outputs.includes(name)) throw new Error(`Unexpected build output: ${name}, add it to scripts/publish.mjs`);
  cpSync(`${from}/${name}`, name, {
    recursive: true,
    filter: (src) => !/\.(br|gz)$/.test(src),
  });
}

if (!existsSync('index.html')) throw new Error('index.html was not generated');
