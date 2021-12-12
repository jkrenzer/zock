import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/mwc-drawer';
import '@material/mwc-icon-button';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-body')
export class Body extends Base {
  static styles = [Base.styles, css`html
        .unresolved main {
          opacity: 0;
        }
    `];

  constructor() {
    super();
    addEventListener('load', () => {
      document.body.classList.remove('unresolved');
    });
  }

  render() {
    return html`
      <mwc-drawer hasHeader type="dismissible">
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>
        <div class="drawer-content">
          <p>Drawer content</p>
          <mwc-icon-button icon="gesture"></mwc-icon-button>
          <mwc-icon-button icon="gavel"></mwc-icon-button>
        </div>
        <div slot="appContent">
          <ui-header></ui-header>
          <ui-main></ui-main>
          <ui-footer></ui-footer>
        </div>
      </mwc-drawer>
    `;
  }
}
