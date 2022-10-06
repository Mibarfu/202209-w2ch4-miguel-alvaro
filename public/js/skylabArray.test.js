import SkylabArray from "./SkylabArray.js";

describe("Given the method searchSomething", () => {
  describe("When it recieves an array of arguments (1,3,5,7) in constructor and 5 in the method", () =>
    test("Then it should return 4", () => {
      const array = new SkylabArray(1, 3, 5, 7);
      const something = 5;

      const expectSomething = array.searchSomething(something);

      expect(expectSomething).toBe(5);
    }));
});
