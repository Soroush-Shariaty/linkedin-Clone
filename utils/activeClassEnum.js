export class activeClass {
  static home = new activeClass("home");
  static myNetwork = new activeClass("myNetwork");
  constructor(name) {
    this.name = name;
  }
}
