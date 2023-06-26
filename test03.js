// 배열
const testArr = [1, 2, 3, 4, 5];
const [one, two, three] = testArr;
console.log(one);
console.log(two);
console.log(three);

let [name, ...rest] = ["gyuri", 21, "ansan"];
console.log(name);
console.log(rest);


let names = ["Steve", "John"];
let students = ["Tom", ...names];
console.log(students);