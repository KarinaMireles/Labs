const actualTemp = 30; 
const desiredTemp = 50; // Change this value to set the desired temperature

if (actualTemp < desiredTemp) {
  console.log("Run Heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else {
  console.log("Standby");
}

const tempCelsius = 40; 
const targetUnit = "F"; 

switch (targetUnit) {
  case "C":
    console.log(`${tempCelsius}°C`);
    break;
  case "F":
    const tempFahrenheit = (tempCelsius * 9 / 5) + 32;
    console.log(`${tempFahrenheit}°F`);
    break;
  case "K":
    const tempKelvin = tempCelsius + 273.15;
    console.log(`${tempKelvin}K`);
    break;
  default:
    console.log("Invalid targetUnit. Please use 'C', 'F', or 'K'.");
}