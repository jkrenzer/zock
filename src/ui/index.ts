import {Body} from "./body";
import {Footer} from "./footer";
import {Header} from "./header";
import {Main} from "./main";
import {Message} from "./message";
import {Nav} from "./nav";

export {
  Body,
  Footer,
  Header,
  Main,
  Message,
  Nav
};

export function init() : Promise<Body> {
  var uiPromise = new Promise<Body>(resolve => {
    const stage = document.createElement('ui-body');
    document.body.appendChild(stage);
    // Done rendering the ui
    resolve(stage);
  });
  return uiPromise;

}

declare global {
  interface HTMLElementTagNameMap {
    'ui-body': Body,
    'ui-footer': Footer,
    'ui-header': Header,
    'ui-main': Main,
    'ui-message': Message,
    'ui-nav': Nav
  }
}
