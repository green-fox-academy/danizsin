import { Person } from "./person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School Of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal(): void {
    console.log('Be a junior software developer.');
  }

  introduce(): void {
    console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`);
  }

  skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }
}