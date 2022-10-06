class SkylabArray2 {
  length;

  constructor(...values) {
    values.forEach((value, index) => {
      this[index] = value;
      this.length = index + 1;
    });
  }

  push(value) {
    this[this.length] = value;
    this.length++;
  }
}

export default SkylabArray2;
