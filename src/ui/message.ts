import {html, css, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {Modal} from "./modal"
import * as styles from "./styles";

@customElement('ui-message')
export class Message extends Modal {

  @property()
  heading = 'Message';
  @property()
  text: (TemplateResult<any>| string | Array<TemplateResult<any>> | Array<string>) = '';

  render() {
    this.content = html`
      <h1>${this.heading}</h1>
      <p>${this.text}</p>
    `;
    return super.render();
  }
}
