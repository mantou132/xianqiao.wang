# xianqiao.wang

Personal site, built with [Gem](https://github.com/mantou132/gem) and GemKit, deployed on Vercel.

- English at `/`, Chinese at `/zh`: text in `src/locales/*.json`
- Projects and links: `src/data.ts`
- `public/postach.io` is also used by the notion / note subdomains

```bash
pnpm install
pnpm dev     # dev server
pnpm build   # prerendered site in dist/web, Vercel output when built on Vercel
```
