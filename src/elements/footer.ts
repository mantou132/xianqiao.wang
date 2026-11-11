import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

const style = css`
  :scope {
    display: block;
    margin-top: 1rem;
    font-size: 0.85rem;
    color: var(--muted);
  }
  a {
    color: inherit;
  }
`;

@customElement('app-footer')
@adoptedStyle(style)
export class AppFooterElement extends GemElement {
  @template()
  #content = () => html`
    © ${new Date().getFullYear()} Xianqiao Wang · ${i18n.get('builtWith')}&nbsp;<a href="https://github.com/mantou132/gem"
      >Gem</a
    >
  `;
}
