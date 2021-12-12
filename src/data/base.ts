import { plainToInstance, instanceToPlain, instanceToInstance, serialize, deserialize, deserializeArray  } from 'class-transformer';

export class Base {
  static getType<T extends typeof Base>(this: T): T {
    return this as T;
  }
  static fromObject(object: any) {
    return plainToInstance(object, this.getType());
  }
  static fromJSON(json: string) {
    return deserialize(this.getType(), json);
  }
  static multipleFromJSON(json: string) {
    return deserializeArray(this.getType(), json);
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
