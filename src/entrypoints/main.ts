import {boot} from "../app";
import {App} from "../data";

var appPromise: Promise<App> = boot();

appPromise.then(app => {
  // Let the fun begin
  console.log("Application is set up")
})
