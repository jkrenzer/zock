import { instanceToPlain, instanceToInstance, serialize  } from 'class-transformer';
import { transformAndValidateSync } from "class-transformer-validator";

export class Base {

  static getType<T extends typeof Base>(this: T): T {
    return this as T;
  }
  static fromObject(object: any) {
    return transformAndValidateSync(this.getType(), object);
  }
  static fromJSON(json: string) {
    return transformAndValidateSync(this.getType(), json);
  }
  static multipleFromJSON(json: string) {
    return transformAndValidateSync(this.getType(), json);
  }
  toObject() {
    return instanceToPlain(this);
  }
  toJSON() : string {
    return serialize(this);
  }
  clone() : this {
    return instanceToInstance(this);
  }

}
