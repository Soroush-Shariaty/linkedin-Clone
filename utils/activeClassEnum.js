export class activeClass {
  static home = new activeClass("home");
  static myNetwork = new activeClass("myNetwork");
  static messaging = new activeClass("messaging");
  constructor(name) {
    this.name = name;
  }
}
