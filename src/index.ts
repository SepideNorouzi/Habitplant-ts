enum MOOD {
  SAD = "sad",
  OKAY = "okay",
  HAPPY = "happy",
}

interface Plant {
  name: string;
  growth: number;
  mood: MOOD;
}

class HabitsPlant implements Plant {
  name: string;
  growth: number;
  mood: MOOD;
  constructor(name: string) {
    this.name = name;
    this.growth = 0;
    this.mood = MOOD.SAD;
  }
  grow(amount: number): void {
    this.growth = Math.min(100, this.growth + amount);
    this.UpdateMood();
  }
  private UpdateMood(): void {
    if (this.growth < 20) {
      this.mood = MOOD.SAD;
    } else if (this.growth < 60) {
      this.mood = MOOD.OKAY;
    } else {
      this.mood = MOOD.HAPPY;
    }
  }
}

class Garden {
  plants: HabitsPlant[];
  constructor() {
    this.plants = [
      new HabitsPlant("reading"),
      new HabitsPlant("exercise"),
      new HabitsPlant("coding"),
    ];
  }
  listPlants(): void {
    this.plants.forEach((p) => {
      console.log(`${p.name} -> growth: ${p.growth} , mood: ${p.mood}`);
    });
  }
  growPlant(name: string): void {
    const plant = this.plants.find((p) => p.name === name);
    if (!plant) {
      console.log("No such plant!");
      return;
    } else {
      plant.grow(10);
    }
  }
}

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,    // listen to the terminal
  output: process.stdout,  // write back to the terminal
});

const garden = new Garden();

console.log("🌱Welcome to the habits garden :)");
garden.listPlants();

rl.question("\nWhich habit do you want to grow? ", (habitName) => {
  garden.growPlant(habitName);
  console.log("\nUpdated garden:");
  garden.listPlants();
  rl.close();
});
