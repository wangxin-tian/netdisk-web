export default class log {

  of(str = '😘') {
    return new log(str);
  }

  constructor(str, color) {
    this.msg = str;
    this.color = color;
  }

  color(color) {
    this.color = color;
    return this;
  }

  value() {
    console.log(`%c${this.msg}`, `color:${this.color}`);
  }

  static msg(msg) {
    console.log(`%c${msg}`,'color: #333;font-weight:bold;padding:5px;background-color:lightblue;border-radius: 5px');
  }
}