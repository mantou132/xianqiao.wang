import { customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import { email } from '../data';

/** What kind of work I'm looking for, differs by language */
@customElement('app-job')
export class AppJobElement extends GemElement {
  @template()
  #content = () => html`
    <p>${i18n.get('job')} <a href=${`mailto:${email}`}>${email}</a></p>
  `;
}
