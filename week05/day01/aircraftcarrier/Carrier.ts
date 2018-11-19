import { Aircraft } from "./Aircraft";

export class Carrier {
  private crew: Aircraft[];
  private carrierTotalAmmo: number;
  private healthPoint: number;

  constructor(healthPoint: number, carrierTotalAmmo: number) {
    this.healthPoint = healthPoint;
    this.carrierTotalAmmo = carrierTotalAmmo;
    this.crew = [];
  }

  addAircraft(aircraft: Aircraft): void {
    this.crew.push(aircraft);
  }

  totalAmmoOnAircrafts(): number {
    let allAmmoCount: number = 0;
    this.crew.forEach(e => {
      allAmmoCount += e.getCurrentAmmo();
    });
    return allAmmoCount;
  }

  maxCapacityOfAllAircrafts(): number {
    let totalCapacity: number = 0;
    this.crew.forEach(e => {
      totalCapacity += e.getMaxAmmo();
    });
    return totalCapacity;
  }

  numberOfPriorityAircrafts(): number {
    let sumOfPrios: number = 0;
    this.crew.forEach(e => {
      if (e.isPriority()) {
        sumOfPrios += 1;
      }
    });
    return sumOfPrios;
  }

  listOfPriorityAircrafts(): Aircraft[] {
    let priorityAircrafts: Aircraft[] = [];
    this.crew.filter(e => {
      if (e.isPriority()) {
        priorityAircrafts.push(e);
      }
    });
    return priorityAircrafts;
  }

  currentPriorityAmmoAmountAvailable(): number {
    let numberOfPriorityAmmo: number = 0;
    this.listOfPriorityAircrafts().forEach(e => {
      numberOfPriorityAmmo += e.getCurrentAmmo();
    });
    return numberOfPriorityAmmo;
  }

  amountOfPriorityAmmoToBeFilledToMax(): number {
    return this.numberOfPriorityAircrafts() * 12 - this.currentPriorityAmmoAmountAvailable();
  }

  fill(): any {
    let usedAmmoForRefill: number = 0;
    if (this.carrierTotalAmmo === 0) {
      console.log('Not enough ammo!');
    } else if (this.carrierTotalAmmo < this.maxCapacityOfAllAircrafts() - this.totalAmmoOnAircrafts()) {
      let numOfPriorAmmoNeeded: number = this.amountOfPriorityAmmoToBeFilledToMax();
      if (this.carrierTotalAmmo <= numOfPriorAmmoNeeded) {
        usedAmmoForRefill += this.carrierTotalAmmo;
        this.crew.forEach(e => {
          if (e.isPriority()) {
            e.refill(this.carrierTotalAmmo / this.numberOfPriorityAircrafts());
          }
        });
      } else {
        let remainingAmmoForNonPriorityAircrafts: number = this.carrierTotalAmmo - this.amountOfPriorityAmmoToBeFilledToMax();
        this.crew.forEach(e => {
          if (e.isPriority()) {
            usedAmmoForRefill += e.getMaxAmmo() - e.getCurrentAmmo();
            e.refill(e.getMaxAmmo() - e.getCurrentAmmo());
          } else if (e.isPriority() === false) {
            usedAmmoForRefill += remainingAmmoForNonPriorityAircrafts / (this.crew.length - this.numberOfPriorityAircrafts());
            e.refill(remainingAmmoForNonPriorityAircrafts / (this.crew.length - this.numberOfPriorityAircrafts()));
          }
        });
      }
    }
    else {
      this.crew.forEach(e => {
        usedAmmoForRefill += e.getMaxAmmo() - e.getCurrentAmmo();
        e.refill(e.getMaxAmmo() - e.getCurrentAmmo());
      });
    }
    this.carrierTotalAmmo -= usedAmmoForRefill;
    console.log(`${usedAmmoForRefill} ammo have been loaded into the machine guns, watch out! ${this.carrierTotalAmmo} remaining in storage!`);

  }

  crewTotalDamage(): number {
    let totalDamage: number = 0;
    this.crew.forEach(e => {
      totalDamage += e.getCurrentAmmo() * e.getBaseDamage();
    });
    return totalDamage;
  }

  getStatus(): void {
    if (this.healthPoint <= 0) {
      console.log('It\'s dead Jim :(');
    } else {
      console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.crew.length}, Ammo storage: ${this.carrierTotalAmmo}, Total damage: ${this.crewTotalDamage()}`);
      console.log('AirCrafts:');
      this.crew.forEach(e => {
        console.log(`Type ${e.getType()}, Ammo: ${e.getCurrentAmmo()}, Base Damage: ${e.getBaseDamage()}, All damage: ${e.getBaseDamage() * e.getCurrentAmmo()}`);
      });

    }
  }

  fight(enemyCarrier: Carrier): void {
    if (this.crewTotalDamage() >= enemyCarrier.healthPoint) {
      if (this.healthPoint <= enemyCarrier.crewTotalDamage()) {
        console.log('Both aircraft carriers have been destroyed!');
        return;
      } else {
        console.log(`Attacker aircraft carrier won the battle with ${this.healthPoint - enemyCarrier.crewTotalDamage()} remaining health!`);
        return;
      }
    } else if (this.healthPoint <= enemyCarrier.crewTotalDamage()) {
      if (this.crewTotalDamage() >= enemyCarrier.healthPoint) {
        console.log('Both aircraft carriers have been destroyed!');
        return;
      } else {
        console.log(`Defender aircraft carrier won the battle with ${enemyCarrier.healthPoint - this.crewTotalDamage()} remaining health!`);
        return;
      }
    } else {
      console.log('Under construction');
      //          NOT YET WORKING
      // console.log(`Both aircraft carriers stay alive after one turn! Attacker carrier healthpoints: ${this.healthPoint - enemyCarrier.crewTotalDamage()}, Enemy carrier healthpoints: ${enemyCarrier.healthPoint - this.crewTotalDamage()}! Next turn!`);
      // this.fight(enemyCarrier);
    }
  }
}