import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n, languages, localizePath } from '$gemkit/i18n';

const style = css`
  :scope {
    font-size: 0.9rem;
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
