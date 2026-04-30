// let & const
const userName = "YGS";
// userName = "Yoon Gun Soo"

let age = 30;
age = 29;

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
const add = (a: number, b: number) => a + b;

console.log(add(2, 5));

// @ts-ignore
const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", event => console.log(event));
}

printOutput(add(5, 2));