import { SolarCar } from "../src/SolarCar";

describe("SolarCar", () => {
  test("team property is set from constructor parameter", () => {
    const solarCar = new SolarCar("Team A");
    expect(solarCar.team).toBe("Team A");
  });

  test("speed property starts at 0", () => {
    const solarCar = new SolarCar("Team A");
    expect(solarCar.speed).toBe(0);
  });

  test("accelerate increases speed by 1", () => {
    const solarCar = new SolarCar("Team A");
    solarCar.accelerate();
    expect(solarCar.speed).toBe(1);
  });

  test("isFuelEmpty always returns false", () => {
    const solarCar = new SolarCar("Team A");
    expect(solarCar.isFuelEmpty()).toBe(false);
  });
});
