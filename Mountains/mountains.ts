interface Mountain {
  name: string;
  height: number;
}
const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];
function findNameOfTallestMountain(mountains: Mountain[]): string {
  if (mountains.length === 0) {
    return "";
  }

  let tallestMountain = mountains[0];
  for (const mountain of mountains) {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  }

  return tallestMountain.name;
}
const tallestMountainName: string = findNameOfTallestMountain(mountains);
console.log(tallestMountainName);
export { Mountain, findNameOfTallestMountain };
