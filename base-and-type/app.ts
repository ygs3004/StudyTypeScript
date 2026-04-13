// 오브젝트의 형태로 타입추론
// const person: {
//     name: string;
//     age: number;
// }

let person = {
    name: "Ygs",
    age: 30,
    hobbies: ["Sports", "Cooking"],
}

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()), error
}