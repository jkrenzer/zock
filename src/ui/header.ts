import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-header')
export class Header extends Base {
  static styles = [Base.styles];

  render() {
    return html`
    <header>
      <ui-nav></ui-nav>
      <slot></slot>
    </header>
    `;
  }
}
