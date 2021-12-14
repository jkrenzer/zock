export function checkCapability() : boolean {
  if (!window.indexedDB) {
      return false;
  }
  else {
    return true;
  }
}

export function init(dbName: string) : Promise<IDBDatabase> {
  console.log("Starting IndexedDB");
  let dbPromise: Promise<IDBDatabase> = new Promise<IDBDatabase>(resolve => {
    let request: IDBRequest = window.indexedDB.open(dbName);
    request.onerror = function(event: Event) {
        console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event: Event) {
        console.log("Database opened successfully");
        let eventRequest : IDBRequest = event.target as IDBRequest;
        let db = eventRequest.result;
        db.onerror = function(event: ErrorEvent) {
        // Generic error handler for all errors targeted at this database's
        // requests!
            console.error("Database error: " + event.message);
        };
        resolve(db);
    };
  });
  return dbPromise;
}
