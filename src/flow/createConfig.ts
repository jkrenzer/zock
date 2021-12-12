import {Config} from "../data";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function createConfig() : Config {
  return new Config(getRandomInt(65000), 1);
}
