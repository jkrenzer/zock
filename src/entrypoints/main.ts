import {boot} from "../app";
import {App} from "../data";

try {
  let appPromise: Promise<App> = boot();

  appPromise.then(_app => {
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
