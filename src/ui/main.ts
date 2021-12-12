import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-main')
export class Main extends Base {
  static styles = [Base.styles];

  render() {
    return html`
    <main>
      <slot></slot>
    </main>
    `;
  }
}
