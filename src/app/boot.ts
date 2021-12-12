import {html} from "lit";
import { getDb } from "../db";
import * as crypto from "../crypto";
import * as storage from "../storage";
import * as ui from "../ui";
import * as webrtc from "../webrtc"
import {getConfig} from "../flow";
import {Config, App} from "../data";

export function boot() : Promise<App> {
  console.log("Apllication startup")

  var dbType = 'indexedDb'; // TODO: Get this from the config
  var dbHandle: IDBDatabase;
  var uiHandle: ui.Body;
  var config: Config;

  var systemHealthyPromise = new Promise<boolean>(async resolve => {
    // Start the ui
    var uiPromise = ui.init();
    var messagePromise = new Promise<ui.Message>(resolve => {
      uiPromise.then(uiHandle => {
        var main = uiHandle.getChild('ui-main')
        if (main) {
          var message = main.addChild('ui-message');
          message.heading = 'State'
          message.text = html`Ui loaded`;
          resolve(message)
        }
      });
    });

    // Fire the database up
    var dbModule = getDb(dbType);
    if (!dbModule) {
      console.error("DB " + dbType + " is not available!");
      resolve(false);
    }
    var dbPromise = dbModule!.init('Test');
    dbPromise.then(db => {
      console.log("Database up and running")
      messagePromise.then(message => {message.text = html`${message.text}<br/>Database running`});
    });

    // Check crypto
    if (!crypto.checkCapability()) {
      console.error("Crypto API is not available!");
      resolve(false);
    }
    messagePromise.then(message => {message.text = html`${message.text}<br/>Crypto available`});
    if (!storage.checkCapability()) {
      console.error("Storage API is not available!");
      resolve(false);
    }
    messagePromise.then(message => {message.text = html`${message.text}<br/>Storage available`});
    config = getConfig();
    messagePromise.then(message => {message.text = html`${message.text}<br/>Config loaded`});

    if (!webrtc.checkCapability()) {
      console.error("No WebRTC available!")
      resolve(false);
    }
    messagePromise.then(message => {message.text = html`${message.text}<br/>WebRTC available`});
    dbHandle = await dbPromise;
    uiHandle = await uiPromise;
    resolve(true);
  });

  var appPromise = new Promise<App>(resolve => {
    systemHealthyPromise.then(healthy => {
      console.log("System is healthy and ready to go!");
      resolve(new App(config, dbHandle, uiHandle))
    });
  })
  return appPromise;
}
