import {Base} from './base';

export class Config extends Base {
  version: number;
  id: number;

  constructor(id: number, version: number) {
    super();
    this.id = id;
    this.version = version;
  }
};
