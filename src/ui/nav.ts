import {html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-nav')
export class Nav extends Base {
  static styles = [Base.styles];

  @property()
  navTitle = html`App`;

  private _toggle_drawer(e: Event) : void {
    console.debug("Trying to toggle drawer")
    const uiBody = document.getElementsByTagName('ui-body')[0];
    const drawer = uiBody.getChild('mwc-drawer');
    if (drawer) {
      console.debug("Toggeling drawer")
      drawer.open = !drawer.open;
    }
  }

  protected render() {
    return html`
    <nav>
      <mwc-top-app-bar>
        <mwc-icon-button @click="${this._toggle_drawer}" slot="navigationIcon" icon="menu"></mwc-icon-button>
        <div slot="title" id="title">${this.navTitle}</div>
        <slot></slot>
      </mwc-top-app-bar>
    </nav>
    `;
  }
}
