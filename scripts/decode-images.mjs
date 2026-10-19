// Photos are stored as base64 text (assets-b64/*.webp.b64) so the repo can be
// pushed through text-only tooling. This restores them to public/img before build.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const src = 'assets-b64'
const out = join('public', 'img')
if (existsSync(src)) {
  mkdirSync(out, { recursive: true })
  for (const f of readdirSync(src).filter((n) => n.endsWith('.b64'))) {
    const buf = Buffer.from(readFileSync(join(src, f), 'utf8').trim(), 'base64')
    writeFileSync(join(out, f.replace(/\.b64$/, '')), buf)
  }
  console.log('decoded images ->', out)
}
