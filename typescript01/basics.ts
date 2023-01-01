// Primitives: number, string, boolean
// More comlex types: arrays, objects
// Funtion types, parameters

let age: number;

age = 12.1;

let userName: string;

userName = "Max";

let inInstructor = true;

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// 사용하지 않는게 좋다. 타입스크립트를 사용하는 의미가 없기 때문
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 31,
};

// 오류
// person = {
//   isEmployee: true;
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference (타입추론)

let course: string | number = "React - The Complete Guide";

course = 12341;

function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
