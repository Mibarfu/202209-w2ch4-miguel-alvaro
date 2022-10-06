import SkylabArray from "./SkylabArray.js";
import SkylabArray2 from "./SkylabArray2.js";

const skyLab = new SkylabArray(1, 3, 5, 7);

const something = 5;
console.log(skyLab.searchSomething(something));

console.log("--------------");

const skyLab2 = new SkylabArray2(1, 3, 5, 7);

console.log(skyLab2.length);
skyLab2.push("Un text");
skyLab2.push(true);
console.log(skyLab2.length);
console.log(skyLab2[skyLab2.length - 2]);
console.log(skyLab2[skyLab2.length - 1]);
