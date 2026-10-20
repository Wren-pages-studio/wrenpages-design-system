/**
 * Decides whether the current package.json version must be published.
 * Publishes only when the local version is strictly greater than the latest on npm.
 * Writes `should_publish`, `version` and `published` to $GITHUB_OUTPUT when running in Actions.
 */
import { execSync } from 'node:child_process';
import { appendFileSync, readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { name: string; version: string };

const parse = (v: string) => v.split('-')[0].split('.').map(Number) as [number, number, number];
const greater = (a: string, b: string) => {
  const [x, y] = [parse(a), parse(b)];
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
};

let published = '0.0.0';
try {
  published =
    execSync(`npm view ${pkg.name} version`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim() || '0.0.0';
} catch {
  // 404 → package never published
}

const shouldPublish = greater(pkg.version, published);
console.log(`${pkg.name}: local ${pkg.version} · npm ${published} → ${shouldPublish ? 'PUBLISH' : 'skip (bump the version to publish)'}`);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `should_publish=${shouldPublish}\nversion=${pkg.version}\npublished=${published}\n`);
}
