import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import { projects } from '../data';
import { pad } from './project';

const style = css`
  :scope {
    display: block;
    padding-top: 0.5rem;
  }
  .heading {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--ink);
  }
`;

@customElement('app-projects')
@adoptedStyle(style)
export class AppProjectsElement extends GemElement {
  @template()
  #content = () => html`
    <section aria-label=${i18n.get('selectedWork')}>
      <p class="label heading rise" style="--i: 2">
        <span>${i18n.get('selectedWork')}</span><span>${pad(projects.length)}</span>
      </p>
      ${projects.map(
        (project, i) =>
          html`<app-project class="rise" style=${`--i: ${i + 3}`} .project=${project} index=${i + 1}></app-project>`,
      )}
    </section>
  `;
}
