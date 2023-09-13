import { translateToPigLatin } from "../pigLatin";
describe("translateToPigLatin", () => {
  it("translates words starting with different vowels correctly", () => {
    expect(translateToPigLatin("apple")).toBe("appleway");
    expect(translateToPigLatin("elephant")).toBe("elephantway");
    expect(translateToPigLatin("orange")).toBe("orangeway");
    expect(translateToPigLatin("iguana")).toBe("iguanaway");
  });
});
describe("translateToPigLatin", () => {
  it("translates words starting with one consonant correctly", () => {
    expect(translateToPigLatin("banana")).toBe("ananabay");
    expect(translateToPigLatin("tiger")).toBe("igertay");
    expect(translateToPigLatin("zebra")).toBe("ebrazay");
    expect(translateToPigLatin("lion")).toBe("ionlay");
  });
});
describe("translateToPigLatin", () => {
  it("translates words starting with two consonants correctly", () => {
    expect(translateToPigLatin("street")).toBe("eetstray");
    expect(translateToPigLatin("black")).toBe("ackblay");
    expect(translateToPigLatin("drink")).toBe("inkdray");
    expect(translateToPigLatin("splash")).toBe("ashsplay");
  });
});
describe("translateToPigLatin", () => {
  it("translates words starting with three consonants correctly", () => {
    expect(translateToPigLatin("glove")).toBe("oveglay");
    expect(translateToPigLatin("chrome")).toBe("omechray");
    expect(translateToPigLatin("straw")).toBe("awstray");
    expect(translateToPigLatin("snack")).toBe("acksnay");
  });
});
describe("translateToPigLatin", () => {
  it("handles lower case conversion", () => {
    expect(translateToPigLatin("hello")).toBe("ellohay");
    expect(translateToPigLatin("Happy")).toBe("appyhay");
    expect(translateToPigLatin("Grape")).toBe("apegray");
    expect(translateToPigLatin("yellow")).toBe("ellowyay");
  });
});
