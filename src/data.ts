export interface Project {
  name: string;
  summary: string;
  facts: string[];
  stack: string;
  repo: string;
  site?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    name: 'SLyrics',
    summary: 'Instant synchronized lyrics for the Spotify Web Player, as a browser extension.',
    facts: ['~5,000 users', '4.5★ on Chrome Web Store', '1k+ GitHub stars', 'since 2020'],
    stack: 'Browser extension · Gem',
    repo: 'https://github.com/mantou132/Spotify-Lyrics',
    site: {
      label: 'Chrome Web Store',
      href: 'https://chromewebstore.google.com/detail/slyrics/mkjfooclbdgjdclepjeepbmmjaclipod',
    },
  },
  {
    name: 'AgentDeck',
    summary: 'Control Claude Code, Codex, Cursor or any ACP agent on your computer from your phone.',
    facts: ['End-to-end encrypted relay', 'self-hostable', 'on TestFlight'],
    stack: 'Rust daemon · ACP · Mobile',
    repo: 'https://github.com/mantou132/AgentDeck',
    site: { label: 'agentdeck.xianqiao.wang', href: 'https://agentdeck.xianqiao.wang' },
  },
  {
    name: 'browser4agent',
    summary: "Lets AI agents read and operate real websites through the user's own browser.",
    facts: ['Local MCP service', 'DevTools integration', 'page tools'],
    stack: 'Browser extension · Native messaging · MCP',
    repo: 'https://github.com/mantou132/browser4agent',
  },
  {
    name: 'Gem',
    summary: 'A Web Components framework, with GemKit for routing, SSR and static sites. This site is built with it.',
    facts: ['since 2019', '1,300+ commits', 'in js-framework-benchmark'],
    stack: 'Web Components · TypeScript',
    repo: 'https://github.com/mantou132/gem',
    site: { label: 'gem.js.org', href: 'https://gem.js.org' },
  },
  {
    name: 'NESBox',
    summary: 'A multiplayer platform for NES, arcade, Flash and WebAssembly games in the browser.',
    facts: ['460+ GitHub stars', 'real-time multiplayer', 'RAG-based Q&A'],
    stack: 'Rust · WebAssembly',
    repo: 'https://github.com/mantou132/nesbox',
    site: { label: 'nesbox.xianqiao.wang', href: 'https://nesbox.xianqiao.wang' },
  },
];

export const links = [
  { label: 'GitHub', href: 'https://github.com/mantou132' },
  { label: 'Notion', href: 'https://notion.xianqiao.wang' },
  { label: 'Twitter', href: 'https://twitter.com/594mantou' },
  { label: 'Juejin', href: 'https://juejin.cn/user/1222312658741159/posts' },
  { label: 'Behance', href: 'https://www.behance.net/mantou' },
];

export const email = '594mantou@gmail.com';
