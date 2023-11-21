import { GasCar } from "../src/GasCar";

describe("GasCar", () => {
  test("team and fuel properties are set from constructor parameters", () => {
    const gasCar = new GasCar("Team B", 5);
    expect(gasCar.team).toBe("Team B");
    expect(gasCar.fuel).toBe(5);
  });

  test("fuel defaults to 10 when omitted", () => {
    const gasCar = new GasCar("Team B");
    expect(gasCar.fuel).toBe(10);
  });

  test("speed property starts at 0", () => {
    const gasCar = new GasCar("Team B");
    expect(gasCar.speed).toBe(0);
  });

  test("accelerate increases speed by 2 and reduces fuel by 1", () => {
    const gasCar = new GasCar("Team B", 5);
    gasCar.accelerate();
    expect(gasCar.speed).toBe(2);
    expect(gasCar.fuel).toBe(4);
  });

  test("isFuelEmpty returns true when fuel is 0", () => {
    const gasCar = new GasCar("Team B", 0);
    expect(gasCar.isFuelEmpty()).toBe(true);
  });

  test("isFuelEmpty returns false when fuel is greater than 0", () => {
    const gasCar = new GasCar("Team B", 5);
    expect(gasCar.isFuelEmpty()).toBe(false);
  });
});
