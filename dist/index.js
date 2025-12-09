"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hii");
var MOOD;
(function (MOOD) {
    MOOD["SAD"] = "sad";
    MOOD["OKAY"] = "okay";
    MOOD["HAPPY"] = "happy";
})(MOOD || (MOOD = {}));
class HabitsPlant {
    name;
    growth;
    mood;
    constructor(name) {
        this.name = name;
        this.growth = 0;
        this.mood = MOOD.SAD;
    }
    grow(amount) {
        this.growth = Math.min(100, this.growth + amount);
        this.UpdateMood();
    }
    UpdateMood() {
        if (this.growth < 20) {
            this.mood = MOOD.SAD;
        }
        else if (this.growth < 60) {
            this.mood = MOOD.OKAY;
        }
        else {
            this.mood = MOOD.HAPPY;
        }
    }
}
class Garden {
    plants;
    constructor() {
        this.plants = [
            new HabitsPlant("reading"),
            new HabitsPlant("exercise"),
            new HabitsPlant("coding"),
        ];
    }
    listPlants() {
        this.plants.forEach((p) => {
            console.log(`${p.name} -> growth: ${p.growth} , mood: ${p.mood}`);
        });
    }
    growPlant(name) {
        const plant = this.plants.find((p) => p.name === name);
        if (!plant) {
            console.log("No such plant!");
            return;
        }
        else {
            plant.grow(10);
        }
    }
}
const garden = new Garden();
console.log("🌱Welcome to the habits garden :)");
garden.listPlants();
console.log("\nGrowing 'reading' by 10 ...");
garden.growPlant("reading");
console.log("\nUpdated garden:");
garden.listPlants();
//# sourceMappingURL=index.js.map