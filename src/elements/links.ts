import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';

import { links } from '../data';

const style = css`
  :scope {
    display: block;
    margin-top: 2.5rem;
  }
  span {
    color: var(--muted);
  }
`;

@customElement('app-links')
@adoptedStyle(style)
export class AppLinksElement extends GemElement {
  @template()
  #content = () => html`${links.map(
    ({ label, href }, i) => html`${i ? html`<span> · </span>` : ''}<a href=${href} rel="me noopener">${label}</a>`,
  )}`;
}
