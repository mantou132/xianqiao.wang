import { adoptedStyle, css, customElement, GemElement, html, numattribute, property, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import type { Project } from '../data';

type Key = Parameters<typeof i18n.get>[0];

export const pad = (n: number) => String(n).padStart(2, '0');

const style = css`
  :scope {
    position: relative;
    display: grid;
    grid-template-columns: 2.75rem 1fr;
    padding: 1.6rem 0 1.7rem;
    border-bottom: 1px solid var(--rule);
  }
  :scope::after {
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
  :scope:hover::after,
  :scope:focus-within::after {
    transform: scaleX(1);
  }
  .num {
    padding-top: 0.55rem;
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--muted);
  }
  :scope:hover .num {
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
  :scope:hover h2 a::after,
  h2 a:focus-visible::after {
    opacity: 1;
    transform: none;
  }
  .summary {
    margin: 0.4rem 0 0.8rem;
    max-width: 34em;
  }
  .facts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0;
    margin: 0;
    padding: 0;
    list-style: none;
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
  .meta a {
    color: var(--muted);
    text-decoration: none;
  }
  .meta a:hover {
    color: var(--accent);
  }
`;

/** One row of the selected work index, text comes from the `<key>.*` locale entries */
@customElement('app-project')
@adoptedStyle(style)
export class AppProjectElement extends GemElement {
  @property project?: Project;
  @numattribute index: number;

  #t = (field: 'summary' | 'facts' | 'stack') => i18n.get(`${this.project!.key}.${field}` as Key);

  @template()
  #content = () => {
    const p = this.project;
    if (!p) return;
    return html`
      <span class="num">${pad(this.index)}</span>
      <div>
        <h2><a href=${p.repo}>${p.name}</a></h2>
        <p class="summary">${this.#t('summary')}</p>
        <ul class="facts">
          ${this.#t('facts')
            .split('|')
            .map((fact) => html`<li>${fact}</li>`)}
        </ul>
        <div class="meta">
          <span>${this.#t('stack')}</span>
          ${p.site ? html`<a href=${p.site.href}>${p.site.label} ↗</a>` : ''}
        </div>
      </div>
    `;
  };
}
