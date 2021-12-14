export function checkCapability() : boolean {
  if (window.Worker) {
    return true;
  }
  else {
    return false;
  }
}
