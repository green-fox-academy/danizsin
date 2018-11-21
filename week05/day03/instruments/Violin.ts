import { StringedInstrument } from "./StringedInstrument";

export class Violin extends StringedInstrument {
  constructor(stringCount: number = 4) {
    super('ElectricGuitar', stringCount);
  }
  sound(): string {
    return 'Screech';
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}