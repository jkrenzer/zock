export function checkCapability() : boolean {
  if (!window.crypto.subtle) {
    return false;
  }
  else {
    return true;
  }
}
