import { customElement, GemElement, html, template } from '@mantou/gem';

import { projects } from '../data';

@customElement('app-projects')
export class AppProjectsElement extends GemElement {
  @template()
  #content = () => html`${projects.map((project) => html`<app-project .project=${project}></app-project>`)}`;
}
