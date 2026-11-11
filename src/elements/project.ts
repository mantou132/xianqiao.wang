import { adoptedStyle, css, customElement, GemElement, html, property, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import type { Project } from '../data';

type Key = Parameters<typeof i18n.get>[0];

const style = css`
  :scope {
    display: block;
    margin: 1.25rem 0;
  }
  h3 {
    display: inline;
    margin: 0;
    font-size: 1rem;
  }
  p {
    margin: 0.2rem 0 0;
  }
  .facts {
    font-size: 0.9rem;
    color: var(--muted);
  }
`;

/** One project, text comes from the `<key>.*` locale entries */
@customElement('app-project')
@adoptedStyle(style)
export class AppProjectElement extends GemElement {
  @property project?: Project;

  #t = (field: 'summary' | 'facts' | 'stack') => i18n.get(`${this.project!.key}.${field}` as Key);

  @template()
  #content = () => {
    const p = this.project;
    if (!p) return;
    return html`
      <h3><a href=${p.repo}>${p.name}</a></h3>
      ${p.site ? html` · <a href=${p.site.href}>${p.site.label}</a>` : ''}
      <p>${this.#t('summary')}</p>
      <p class="facts">${[this.#t('stack'), ...this.#t('facts').split('|')].join(' · ')}</p>
    `;
  };
}
