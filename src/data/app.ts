import {Body} from "../ui";
import {Config} from "./config";

export class App {
  dbHandle: IDBDatabase;
  uiHandle: Body;
  config: Config;

  constructor(config: Config, dbHandle: IDBDatabase, uiHandle: Body) {
    this.config = config;
    this.dbHandle = dbHandle;
    this.uiHandle = uiHandle;
  }
}
