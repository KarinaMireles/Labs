import Greeter from "../src/routes/greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    const greeting = super.greet(name);
    return `console.log('${greeting}')`;
  }
}

export default JavaScriptGreeter;
