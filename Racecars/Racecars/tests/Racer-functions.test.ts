import { SolarCar } from "../src/SolarCar";
import { GasCar } from "../src/GasCar";
import {
  findRacersWithEmptyFuel,
  findAverageSpeed,
  getFasterRacer,
} from "../src/Racer-functions";

describe("findRacersWithEmptyFuel", () => {
  test("returns racers with empty fuel", () => {
    const racers = [
      new GasCar("Team C", 0),
      new GasCar("Team D", 0),
      new SolarCar("Team E"),
    ];

    const result = findRacersWithEmptyFuel(racers);
    expect(result.length).toBe(2);
    expect(result[0].team).toBe("Team C");
    expect(result[1].team).toBe("Team D");
  });

  test("returns an empty array when no racers have empty fuel", () => {
    const racers = [new GasCar("Team C", 2), new SolarCar("Team E")];

    const result = findRacersWithEmptyFuel(racers);
    expect(result.length).toBe(0);
  });
});

describe("findAverageSpeed", () => {
  test("calculates average speed correctly", () => {
    const racers = [
      new GasCar("Team F", 3),
      new SolarCar("Team G"),
      new GasCar("Team H", 5),
    ];

    const result = findAverageSpeed(racers);
    expect(result).toBe(2.67);
  });

  test("returns 0 for an empty array", () => {
    const result = findAverageSpeed([]);
    expect(result).toBe(0);
  });
});

describe("getFasterRacer", () => {
  test("returns the faster racer", () => {
    const racerA = new GasCar("Team I", 5);
    const racerB = new SolarCar("Team J");

    const result = getFasterRacer(racerA, racerB);
    expect(result).toBe(racerA);
  });

  test("returns null for racers with the same speed", () => {
    const racerA = new GasCar("Team I", 5);
    const racerB = new GasCar("Team J", 5);

    const result = getFasterRacer(racerA, racerB);
    expect(result).toBeNull();
  });
});
