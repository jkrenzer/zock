import {Config} from "../data";
import {createSigningKeyPair, createEncryptionKeyPair} from "../crypto";

function getRandomInt(max: number) {

  return Math.floor(Math.random() * max);
}

export async function createConfig() : Promise<Config> {
  let signingKeypair = await createSigningKeyPair();
  let encryptionKeypair = await createEncryptionKeyPair();
  return new Config(signingKeypair, encryptionKeypair);
}
