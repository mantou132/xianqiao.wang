import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

const style = css`
  :scope {
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
  a {
    text-decoration: none;
    border-bottom: 1px dotted var(--muted);
  }
`;

@customElement('app-footer')
@adoptedStyle(style)
export class AppFooterElement extends GemElement {
  @template()
  #content = () => html`
    <span>© ${new Date().getFullYear()} Xianqiao Wang</span>
    <span>${i18n.get('builtWith')} <a href="https://github.com/mantou132/gem">Gem + GemKit</a></span>
  `;
}
