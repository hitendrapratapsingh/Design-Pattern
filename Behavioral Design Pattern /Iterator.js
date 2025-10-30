class Iterator {
  constructor(data) {
    this.data = data;
    this.index = 0;
  }

  next() {
    return this.index < this.data.length
      ? { value: this.data[this.index++], done: false }
      : { done: true };
  }
}

// Usage
const iterator = new Iterator(["Hitendra", "Amit", "Raj"]);
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
