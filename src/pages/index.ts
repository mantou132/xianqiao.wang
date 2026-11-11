import { adoptedStyle, css, GemElement, html, template } from '@mantou/gem';
import { page } from '@mantou/gemkit';
import { i18n } from '$gemkit/i18n';

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
    align-content: start;
    gap: clamp(2.5rem, 7vw, 7rem);
  }
  .intro {
    position: sticky;
    top: clamp(2rem, 7vw, 6rem);
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
  }
  app-lang-switch {
    margin-bottom: -1rem;
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
  :lang(zh) h1 {
    letter-spacing: 0.04em;
  }
  :lang(zh) h1 em {
    margin-top: 0.35em;
    font-size: 0.42em;
    letter-spacing: 0;
  }
  .lede {
    margin: 0;
    max-width: 26em;
    font-size: 1.15rem;
    line-height: 1.5;
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

@page({ title: () => i18n.get('title') })
@adoptedStyle(style)
export default class HomePage extends GemElement {
  @template()
  #content = () => html`
    <div class="columns">
      <section class="intro">
        <app-lang-switch class="rise"></app-lang-switch>
        <h1 class="rise" style="--i: 1">${i18n.get('name')} <em>${i18n.get('nameAlt')}</em></h1>
        <p class="lede rise" style="--i: 2">${i18n.get('lede')}</p>
        <app-job class="rise" style="--i: 3"></app-job>
        <app-links class="rise" style="--i: 4"></app-links>
      </section>
      <app-projects></app-projects>
    </div>
    <app-footer></app-footer>
  `;
}
