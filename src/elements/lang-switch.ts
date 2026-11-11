import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n, languages, localizePath } from '$gemkit/i18n';

const style = css`
  :scope {
    align-self: flex-start;
  }
  a {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
  }
  a:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
`;

/** Links to the page in the other languages, a full reload as GemKit recommends */
@customElement('app-lang-switch')
@adoptedStyle(style)
export class AppLangSwitchElement extends GemElement {
  @template()
  #content = () => html`
    ${languages
      .filter((lang) => lang !== i18n.currentLanguage)
      .map((lang) => html`<a href=${localizePath(lang)} hreflang=${lang}>${i18n.get('switchLanguage')}</a>`)}
  `;
}
