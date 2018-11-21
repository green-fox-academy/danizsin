import { StringedInstrument } from "./StringedInstrument";

export class BassGuitar extends StringedInstrument {
  constructor(stringCount: number = 4) {
    super('BassGuitar', stringCount);
  }
  sound(): string {
    return 'Dumm-duum-duum';
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}