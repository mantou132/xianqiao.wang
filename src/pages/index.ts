import { adoptedStyle, css, GemElement, html, template } from '@mantou/gem';
import { page } from '@mantou/gemkit';
import { i18n } from '$gemkit/i18n';

const style = css`
  :scope {
    display: block;
    max-width: 40rem;
    margin: 0 auto;
    padding: 3rem 1.25rem 2rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
  }
  h1 {
    margin: 0;
    font-size: 1.6rem;
  }
  h2 {
    margin: 2.5rem 0 0.5rem;
    font-size: 1.1rem;
  }
`;

@page({ title: () => i18n.get('title') })
@adoptedStyle(style)
export default class HomePage extends GemElement {
  @template()
  #content = () => html`
    <header>
      <h1>${i18n.get('name')}</h1>
      <app-lang-switch></app-lang-switch>
    </header>
    <p>${i18n.get('lede')}</p>
    <app-job></app-job>
    <h2>${i18n.get('selectedWork')}</h2>
    <app-projects></app-projects>
    <app-links></app-links>
    <app-footer></app-footer>
  `;
}
