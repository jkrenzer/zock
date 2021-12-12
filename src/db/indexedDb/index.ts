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
  var dbPromise: Promise<IDBDatabase> = new Promise<IDBDatabase>(resolve => {
    var request: IDBRequest = window.indexedDB.open(dbName);
    request.onerror = function(event: Event) {
        console.log("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = function(event: Event) {
        console.log("Database opened successfully");
        var eventRequest : IDBRequest = event.target as IDBRequest;
        var db = eventRequest.result;
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
