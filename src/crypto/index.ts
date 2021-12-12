export function checkCapability() : boolean {
  if (!window.crypto.subtle) {
    return false;
  }
  else {
    return true;
  }
}

export function createSigningKeyPair() : Promise<CryptoKeyPair> {
  let keyPair =  window.crypto.subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384"
    },
    true,
    ["sign", "verify"]
  );
  return keyPair;
}
export function createEncryptionKeyPair() : Promise<CryptoKeyPair> {
  let keyPair = window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  );
  return keyPair;
}
