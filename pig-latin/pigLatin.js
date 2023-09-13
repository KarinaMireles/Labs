export function translateToPigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  word = word.toLowerCase();

  if (vowels.includes(word[0])) {
    return word + "way";
  } else {
    let consonants = "";
    let i = 0;
    while (i < word.length && !vowels.includes(word[i])) {
      consonants += word[i];
      i++;
    }

    const translatedWord = word.slice(i) + consonants + "ay";
    return translatedWord;
  }
}

console.log(translateToPigLatin("apple") === "appleway");
console.log(translateToPigLatin("elephant") === "elephantway");
console.log(translateToPigLatin("igloo") === "iglooway");
console.log(translateToPigLatin("orange") === "orangeway");
console.log(translateToPigLatin("umbrella") === "umbrellaway");

console.log(translateToPigLatin("banana") === "ananabay");
console.log(translateToPigLatin("tiger") === "igertay");

console.log(translateToPigLatin("street") === "eetstray");

console.log(translateToPigLatin("glove") === "oveglay");

console.log(translateToPigLatin("Hello") === "ellowhay");
