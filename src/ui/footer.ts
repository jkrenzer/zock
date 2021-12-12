import {html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-footer')
export class Footer extends Base {
  static styles = [Base.styles];

  render() {
    return html`
    <footer>
      <slot></slot>
    </footer>
    `;
  }
}
