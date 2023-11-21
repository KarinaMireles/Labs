import Greeter from "../src/routes/greeter";

describe("Greeter class", () => {
  it("should return a greeting with the provided name", () => {
    const greeter = new Greeter("Hello");
    const greeting = greeter.greet("Alice");
    expect(greeting).toBe("Hello, Alice!");
  });

  it("should handle different greetings", () => {
    const greeter = new Greeter("Hi");
    const greeting = greeter.greet("Bob");
    expect(greeting).toBe("Hi, Bob!");
  });
});
