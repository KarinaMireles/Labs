import Greeter from "./greeter";

export class HtmlGreeter extends Greeter {
  constructor(greeting: string, private tagName: string = "h1") {
    super(greeting);
  }

  greet(name: string): string {
    const message = super.greet(name);
    return `<${this.tagName}>${message}</${this.tagName}>`;
  }
}

export default HtmlGreeter;
