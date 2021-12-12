import * as indexedDb from "./indexedDb";

export function getDb(dbType: string) {
  if (dbType == 'indexedDb') {
    if (indexedDb.checkCapability()) {
      return indexedDb
    }
    else {
      console.log("Your browser doesn't support a stable version of IndexedDB!");
    }
  }
  return null;
}
