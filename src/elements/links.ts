import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import { links } from '../data';

const style = css`
  :scope {
    display: block;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.1rem;
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: var(--mono);
    font-size: 0.85rem;
  }
  a {
    color: var(--muted);
    text-decoration: none;
  }
  a:hover {
    color: var(--ink);
  }
  a::after {
    content: '↗';
    margin-left: 0.15em;
    font-size: 0.8em;
    color: var(--accent);
  }
`;

@customElement('app-links')
@adoptedStyle(style)
export class AppLinksElement extends GemElement {
  @template()
  #content = () => html`
    <nav aria-label=${i18n.get('elsewhere')}>
      <p class="label">${i18n.get('elsewhere')}</p>
      <ul>
        ${links.map(({ label, href }) => html`<li><a href=${href} rel="me noopener">${label}</a></li>`)}
      </ul>
    </nav>
  `;
}
