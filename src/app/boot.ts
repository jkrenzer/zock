import { indexedDb } from "../db";
import * as crypto from "../crypto";
import * as storage from "../storage";
import * as ui from "../ui";
import * as webrtc from "../webrtc";
import * as worker from "../worker";
import {getConfig} from "../flow";
import {Config, App} from "../data";

export function boot() : Promise<App> {
  console.log("Apllication startup")
  let uiPromise = ui.init();

  let systemHealthyPromise = new Promise<any>((resolve, reject) => {

    let healthChecks = {
      "indexedDB": indexedDb.checkCapability(),
      "crypto": crypto.checkCapability(),
      "storage": storage.checkCapability(),
      "webrtc": webrtc.checkCapability(),
      "webWorker": worker.checkCapability()
    }

    let overallHealth = true;
    Object.values(healthChecks).forEach(health => {
      if (!health) {
        overallHealth = false;
      }
    });
    if (overallHealth) {
      resolve(healthChecks);
    }
    else {
      reject(healthChecks);
    }
  });

  let appPromise = new Promise<App>( async (resolve, reject) => {
    systemHealthyPromise.then( async _health => {
      let config: Config = await getConfig();
      let uiHandle: ui.Body = await uiPromise;
      let dbHandle: IDBDatabase = await indexedDb.init('Test');
      console.log("System is healthy and ready to go!");
      resolve(new App(config, dbHandle, uiHandle));
    });
    systemHealthyPromise.catch(health => {
        console.error("System unable to boot!");
        console.debug(health as string);
        // TODO: Add ui message!
        reject(new Error("Prerequisites not met. System unable to boot!"));
    });
  });
  return appPromise;
}
