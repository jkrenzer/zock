import {Base} from './base';
import {IsInt, IsPositive, IsDefined} from 'class-validator';
export class Config extends Base {
  version: number = 2;
  @IsInt()
  @IsPositive()
  id: number;
  @IsDefined()
  encryptionKeypair: CryptoKeyPair;
  @IsDefined()
  signingKeyPair: CryptoKeyPair;

  constructor(id: number, skp: CryptoKeyPair, ekp: CryptoKeyPair) {
    super();
    this.id = id;
    this.signingKeyPair = skp;
    this.encryptionKeypair = ekp;
  }
};
