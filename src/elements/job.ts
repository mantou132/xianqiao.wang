import { adoptedStyle, css, customElement, GemElement, html, template } from '@mantou/gem';
import { i18n } from '$gemkit/i18n';

import { email } from '../data';

const style = css`
  :scope {
    display: block;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: grid;
    grid-template-columns: 1.25rem 1fr;
    font-size: 0.98rem;
    line-height: 1.45;
  }
  li + li {
    margin-top: 0.35rem;
  }
  li::before {
    content: '—';
    color: var(--accent);
  }
  .mail {
    display: inline-block;
    margin-top: 1rem;
    padding-bottom: 1px;
    font-family: var(--mono);
    font-size: 0.85rem;
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
  }
  .mail:hover {
    color: var(--accent);
  }
`;

/** What kind of work I'm looking for, differs by language */
@customElement('app-job')
@adoptedStyle(style)
export class AppJobElement extends GemElement {
  @template()
  #content = () => html`
    <p class="label">${i18n.get('workLabel')}</p>
    <ul>
      <li>${i18n.get('work1')}</li>
      <li>${i18n.get('work2')}</li>
      <li>${i18n.get('work3')}</li>
    </ul>
    <a class="mail" href=${`mailto:${email}`}>${email}</a>
  `;
}
