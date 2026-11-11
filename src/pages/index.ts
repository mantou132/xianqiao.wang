import { adoptedStyle, css, GemElement, html, template } from '@mantou/gem';
import { page } from '@mantou/gemkit';

import { email, links, projects } from '../data';

const style = css`
  :scope {
    display: flex;
    flex-direction: column;
    gap: clamp(3rem, 7vw, 6rem);
    max-width: 72rem;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0 auto;
    padding: clamp(2rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem) clamp(1.5rem, 4vw, 2.5rem);
  }
  /* Own wrapper so the sticky intro never slides over the footer */
  .columns {
    flex: 1;
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    align-items: start;
    gap: clamp(2.5rem, 7vw, 7rem);
  }

  /* —— Load sequence —— */
  .rise {
    animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.1, 1) both;
    animation-delay: calc(var(--i, 0) * 90ms + 120ms);
  }
  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .rise {
      animation: none;
    }
  }

  /* —— Left column —— */
  .intro {
    position: sticky;
    top: clamp(2rem, 7vw, 6rem);
    align-self: start;
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
  }
  h1 {
    margin: 0;
    font-weight: 400;
    font-size: clamp(2.6rem, 5.4vw, 4.25rem);
    line-height: 0.98;
    letter-spacing: -0.025em;
  }
  h1 em {
    display: block;
    font-style: italic;
    color: var(--muted);
  }
  .lede {
    margin: 0;
    max-width: 26em;
    font-size: 1.15rem;
    line-height: 1.5;
  }
  .lede a {
    text-decoration-color: var(--accent);
    text-underline-offset: 3px;
  }
  .label {
    margin: 0 0 0.75rem;
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .work ul,
  .elsewhere ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .work li {
    display: grid;
    grid-template-columns: 1.25rem 1fr;
    font-size: 0.98rem;
    line-height: 1.45;
  }
  .work li + li {
    margin-top: 0.35rem;
  }
  .work li::before {
    content: '—';
    color: var(--accent);
  }
  .mail {
    display: inline-block;
    margin-top: 1rem;
    font-family: var(--mono);
    font-size: 0.85rem;
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
    padding-bottom: 1px;
  }
  .mail:hover {
    color: var(--accent);
  }
  .elsewhere ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.1rem;
    font-family: var(--mono);
    font-size: 0.85rem;
  }
  .elsewhere a {
    text-decoration: none;
    color: var(--muted);
  }
  .elsewhere a:hover {
    color: var(--ink);
  }
  .elsewhere a::after {
    content: '↗';
    margin-left: 0.15em;
    font-size: 0.8em;
    color: var(--accent);
  }

  /* —— Right column —— */
  .index {
    padding-top: 0.5rem;
  }
  .index > .label {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.75rem;
    margin: 0;
    border-bottom: 1px solid var(--ink);
  }
  article {
    position: relative;
    display: grid;
    grid-template-columns: 2.75rem 1fr;
    padding: 1.6rem 0 1.7rem;
    border-bottom: 1px solid var(--rule);
  }
  article::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.1, 1);
  }
  article:hover::after,
  article:focus-within::after {
    transform: scaleX(1);
  }
  .num {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--muted);
    padding-top: 0.55rem;
  }
  article:hover .num {
    color: var(--accent);
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1.6rem, 2.6vw, 2.1rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
  }
  h2 a {
    text-decoration: none;
  }
  h2 a::after {
    content: ' →';
    display: inline-block;
    color: var(--accent);
    opacity: 0;
    transform: translateX(-0.4em);
    transition:
      opacity 0.3s,
      transform 0.3s;
  }
  article:hover h2 a::after,
  h2 a:focus-visible::after {
    opacity: 1;
    transform: none;
  }
  .summary {
    margin: 0.4rem 0 0.8rem;
    max-width: 34em;
  }
  .facts {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0;
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--muted);
  }
  .facts li + li::before {
    content: '·';
    margin: 0 0.6em;
    color: var(--rule);
  }
  .meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 1rem;
    margin-top: 0.5rem;
    font-family: var(--mono);
    font-size: 0.75rem;
  }
  .stack {
    color: var(--ink);
  }
  .meta a {
    color: var(--muted);
    text-decoration: none;
  }
  .meta a:hover {
    color: var(--accent);
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--rule);
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--muted);
  }
  footer a {
    text-decoration: none;
    border-bottom: 1px dotted var(--muted);
  }

  @media (max-width: 52rem) {
    .columns {
      grid-template-columns: 1fr;
    }
    .intro {
      position: static;
    }
  }
`;

const pad = (n: number) => String(n).padStart(2, '0');

@page('Product engineer')
@adoptedStyle(style)
export default class HomePage extends GemElement {
  @template()
  #content = () => html`
    <div class="columns">
    <section class="intro">
      <h1 class="rise">Xianqiao <em>Wang</em></h1>

      <p class="lede rise" style="--i: 2">
        Product engineer working close to the web platform — browsers, developer tools, and the infrastructure that
        lets AI agents do real work. I take things from a user's problem to a reliable, shipped product.
      </p>

      <div class="work rise" style="--i: 3">
        <p class="label">Working with me</p>
        <ul>
          <li>Open to remote roles in developer tools, web infrastructure and AI products.</li>
          <li>Async-first. I do my best work in writing: docs, PRs, issues.</li>
          <li>Based in China (UTC+8), happy to overlap with US hours.</li>
        </ul>
        <a class="mail" href=${`mailto:${email}`}>${email}</a>
      </div>

      <nav class="elsewhere rise" style="--i: 4" aria-label="Elsewhere">
        <p class="label">Elsewhere</p>
        <ul>
          ${links.map(({ label, href }) => html`<li><a href=${href} rel="me noopener">${label}</a></li>`)}
        </ul>
      </nav>
    </section>

    <section class="index" aria-label="Selected work">
      <p class="label rise" style="--i: 2"><span>Selected work</span><span>${pad(projects.length)}</span></p>
      ${projects.map(
        (p, i) => html`
          <article class="rise" style=${`--i: ${i + 3}`}>
            <span class="num">${pad(i + 1)}</span>
            <div>
              <h2><a href=${p.repo}>${p.name}</a></h2>
              <p class="summary">${p.summary}</p>
              <ul class="facts">
                ${p.facts.map((f) => html`<li>${f}</li>`)}
              </ul>
              <div class="meta">
                <span class="stack">${p.stack}</span>
                ${p.site ? html`<a href=${p.site.href}>${p.site.label} ↗</a>` : ''}
              </div>
            </div>
          </article>
        `,
      )}
    </section>
    </div>

    <footer>
      <span>© ${new Date().getFullYear()} Xianqiao Wang</span>
      <span>
        Built with <a href="https://github.com/mantou132/gem">Gem + GemKit</a> · prerendered · no web fonts, no trackers
      </span>
    </footer>
  `;
}
