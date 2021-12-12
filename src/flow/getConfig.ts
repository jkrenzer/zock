import {Config} from "../data";
import {getStorage} from "../storage";
import {createConfig} from "./createConfig";

export function getConfig() : Config {
  var storageInterface = getStorage();
  var configJSON = storageInterface.getItem('config');
  if (configJSON) {
    var config: Config = Config.fromJSON(configJSON) as Config;
    if (config) {
      console.log("Config" + config.id + "loaded");
      return config;
    }
  }
  var config = createConfig();
  console.log("Config created")
  storageInterface.setItem('config', config.toJSON());
  console.log("Config" + config.id + "saved");
  return config;
}
