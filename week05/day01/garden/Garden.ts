import { Plant } from "./Plant";

export class Garden {
  protected crew: Plant[];
  constructor() {
    this.crew = [];
  }

  addPlant(initPlant: Plant): void {
    this.crew.push(initPlant);
  }

  getCrew() {
    return this.crew;
  }

  plantsNeedingWater(): number {
    let numOfPlantsNeedingWater: number = 0;
    this.crew.forEach(e => {
      if (e.constructor.name === 'Flower') {
        if (e.getWaterLevel() < 5) {
          numOfPlantsNeedingWater += 1;
        }
      } else if (e.constructor.name === 'Tree') {
        if (e.getWaterLevel() < 10) {
          numOfPlantsNeedingWater += 1;
        }
      }
    });
    return numOfPlantsNeedingWater;
  }

  waterGarden(waterAmount: number): void {
    console.log(`Watering with: ${waterAmount}`);
    let waterByThisAmount: number = waterAmount / this.plantsNeedingWater();
    this.crew.forEach(e => {
      if (e.constructor.name === 'Flower') {
        if (e.getWaterLevel() < 5) {
          e.setWaterLevel(waterByThisAmount * 0.75);
        }
      } else if (e.constructor.name === 'Tree') {
        if (e.getWaterLevel() < 10) {
          e.setWaterLevel(waterByThisAmount * 0.4);
        }
      }
    });
  }
}