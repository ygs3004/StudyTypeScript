// const names: Array<string> = [];
// // names[0].split("") // generic으로 string 타입 이므로 string split 메서드 사용가능
//
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("timeout");
//     }, 2000)
// });
//
// promise.then(data => {
//     data.split("") // generic으로 string 타입 이므로 string split 메서드 사용가능
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge<{name:string, hobbies: string[]}, {age: number}>({name: "Ygs", hobbies: ["Game"]}, {age: 30});
console.log(mergedObj);

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "No Value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Game"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "value: "+ obj[key];
}
extractAndConvert({name: "Ygs"}, "name")