import {LitElement, CSSResultGroup} from 'lit';
import {customElement} from 'lit/decorators.js';

import * as styles from "./styles";

@customElement('ui-base')
export class Base extends LitElement {
  static styles: CSSResultGroup = styles.base

  addChild(tag: string, id?: string) {
    const child = document.createElement(tag);
    if (id !== undefined) {
      child.id = id;
    }
    this.appendChild(child);
    return child;
  }

  getChild(tag: string) {
    let child: any =  this.shadowRoot!.querySelector(tag);
    return child;
  }
}
