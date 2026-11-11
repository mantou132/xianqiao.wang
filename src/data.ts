export interface Project {
  /** Locale key prefix, e.g. `slyrics` reads `slyrics.summary` */
  key: string;
  name: string;
  repo: string;
  site?: { label: string; href: string };
}

export const projects: Project[] = [
  {
    key: 'agentdeck',
    name: 'AgentDeck',
    repo: 'https://github.com/mantou132/AgentDeck',
    site: { label: 'agentdeck.xianqiao.wang', href: 'https://agentdeck.xianqiao.wang' },
  },
  {
    key: 'browser4agent',
    name: 'browser4agent',
    repo: 'https://github.com/mantou132/browser4agent',
  },
  {
    key: 'gem',
    name: 'Gem',
    repo: 'https://github.com/mantou132/gem',
    site: { label: 'gem.js.org', href: 'https://gem.js.org' },
  },
  {
    key: 'nesbox',
    name: 'NESBox',
    repo: 'https://github.com/mantou132/nesbox',
    site: { label: 'nesbox.xianqiao.wang', href: 'https://nesbox.xianqiao.wang' },
  },
  {
    key: 'slyrics',
    name: 'SLyrics',
    repo: 'https://github.com/mantou132/Spotify-Lyrics',
    site: {
      label: 'Chrome Web Store',
      href: 'https://chromewebstore.google.com/detail/slyrics/mkjfooclbdgjdclepjeepbmmjaclipod',
    },
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
