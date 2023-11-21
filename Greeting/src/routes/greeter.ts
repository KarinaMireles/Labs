export class Greeter {
    constructor(private greeting: string) {}
  
    greet(name: string): string {
      return `${this.greeting}, ${name}!`;
    }
  }
  
  export default Greeter;