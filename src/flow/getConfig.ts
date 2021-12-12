import {Config} from "../data";
import {getStorage} from "../storage";
import {createConfig} from "./createConfig";

export async function getConfig() : Promise<Config> {
  let storageInterface = getStorage();
  let configJSON = storageInterface.getItem('config');
  if (configJSON) {
    let config: Config;
    try {
      config = Config.fromJSON(configJSON) as Config;
      if (config) {
        console.log("Config " + config.id + " loaded");
        return config;
      }
    }
    catch (e: unknown) {
      console.warn("Config found but corrupted or outdated!");
    }
  }
  try {
    let config: Config = await createConfig();
    console.log("Config created")
    storageInterface.setItem('config', config.toJSON());
    console.log("Config " + config.id + " saved");
    return config;
  }
  catch (e: unknown) {
    console.error("Could not create config");
    if (e instanceof Error) {
      console.error(e.message);
    }
    throw e;
  }
}
