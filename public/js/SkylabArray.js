class SkylabArray {
  arraySkilab;
  length;

  constructor(...values) {
    this.arraySkilab = values;
    // this.length = this.size();
  }

  searchSomething(something) {
    let indexLength = 0;
    while (this.arraySkilab[indexLength] !== undefined) {
      indexLength += 1;
    }

    let indexFind = 0;
    for (indexFind; indexFind < indexLength; indexFind += 1) {
      if (this.arraySkilab[indexFind] === something) {
        return this.arraySkilab[indexFind];
      }
    }

    return false;
  }
}

export default SkylabArray;
