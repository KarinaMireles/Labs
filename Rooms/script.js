class Room {
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
    this.available = true; //Step 2
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18); //contructor parameter

console.log("Room 1:");
console.log("Name:", room1.name);
console.log("Length:", room1.length);
console.log("Width:", room1.width);
console.log("Area:", room1.getArea());
console.log("Perimeter:", room1.getPerimeter());

console.log("Room 2:");
console.log("Name:", room2.name);
console.log("Length:", room2.length);
console.log("Width:", room2.width);
console.log("Area:", room2.getArea());
console.log("Perimeter:", room2.getPerimeter());

room2.available = false; //added

console.log("Room 1 Available:", room1.available);
console.log("Room 2 Available:", room2.available);

console.log("Room 1 Capacity:", room1.capacity);
console.log("Room 2 Capacity:", room2.capacity);
