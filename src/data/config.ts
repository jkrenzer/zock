import {Base} from './base';
import {IsUUID, IsDefined} from 'class-validator';
import {randomUUID} from '../crypto';

export class Config extends Base {
  version: number = 2;
  @IsUUID('4')
  id: string;
  @IsDefined()
  encryptionKeypair: CryptoKeyPair;
  @IsDefined()
  signingKeyPair: CryptoKeyPair;

  constructor(skp: CryptoKeyPair, ekp: CryptoKeyPair) {
    super();
    this.id = randomUUID();
    this.signingKeyPair = skp;
    this.encryptionKeypair = ekp;
  }
};
