import {html, css, CSSResultGroup} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import '@material/mwc-dialog';
import '@material/mwc-button';

import {Base} from "./base"
import * as styles from "./styles";

@customElement('ui-modal')
export class Modal extends Base {
  static styles: CSSResultGroup = [ Base.styles, css`
  div.content {
    padding: 5px;
    text-align: center;
  }
  `];

  @property()
  content = html``;
  @property()
  dialogTitle: string = 'Modal';

  render() {
    return html`
    <mwc-dialog title="${this.dialogTitle}" open>
    <div class="content">${this.content}</div>
    <mwc-button slot=primaryAction dialogAction=ok icon=check raised label="Ok"></mwc-button>
    </mwc-dialog>
    `;
  }
}
