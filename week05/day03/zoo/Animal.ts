export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected weight: number;
  protected height: number;

  constructor(name: string) {
    this.name = name;
    this.age = Math.floor(Math.random() * 10) + 1;
    this.gender = 'male';
    this.weight = 100;
    this.height = 1.45;
  }

  getName(): string {
    return this.name;
  }

  abstract breed(): void;
}