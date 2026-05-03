// let & const
// const userName = "YGS";
// userName = "Yoon Gun Soo"
//
// let age = 30;
// age = 29;

function add2(a: number, b: number) {
    let result;
    result = a + b;
    return result;
}

// js 기준 코드 작동, ts 기준 컴파일 에러
// if (age > 20) {
//     var isOld = true;
// }
// console.log(isOld);


// arrow function
const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

// @ts-ignore
const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", event => console.log(event));
}

printOutput(add(5));


// 스프레드 연산자
let hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
    firstName: "Ygs",
    age: 37,
}

const copiedPerson = { ...person };

const addFunction = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = addFunction(5, 10, 2, 3, 7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const[hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;
console.log(userName, age);