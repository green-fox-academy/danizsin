export abstract class Vehicle {
  protected seriesNumber: number;
  protected type: string;
  protected color: string;
  constructor(type: string) {
    this.type = type;
  }
}