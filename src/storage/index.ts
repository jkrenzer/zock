export function checkCapability() : boolean {
  if (!navigator.storage) {
    return false;
  }
  else {
    return true;
  }
}

export function getStorage(type?: string) {
  return localStorage;
}
