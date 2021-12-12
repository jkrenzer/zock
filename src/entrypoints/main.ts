import {boot} from "../app";
import {App} from "../data";

try {
  var appPromise: Promise<App> = boot();

  appPromise.then(app => {
    // Let the fun begin
    console.log("Application is set up")
  })
}
catch (e: unknown) {
  if (e instanceof Error) {
    console.error("Critical Error encountered: " + e.message);
  }
  else {
    console.error("Critical unknown error encountered");
  }
}
