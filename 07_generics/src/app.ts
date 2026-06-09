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

console.log(countAndDescribe(["Sports", "Game"]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "value: "+ obj[key];
}
extractAndConvert({name: "Ygs"}, "name");

class DataStorage<T extends string | number> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Yoon");
textStorage.addItem("Gunsoo");
textStorage.removeItem("Gunsoo");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const yoonObj = {name: "Yoon"};
// objStorage.addItem(yoonObj);
// objStorage.addItem({name: "Gunsoo"});
// objStorage.removeItem(yoonObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Faker", "Keria"];
// names.push("Peyz"); error
// names.pop(); error