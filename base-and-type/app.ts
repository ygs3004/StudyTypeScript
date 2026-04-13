// 오브젝트의 형태로 타입추론
// const person: {
//     name: string;
//     age: number;
// }

let person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // 명시적 선언으로 튜플 타입 부여
} = {
    name: "Ygs",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "autor"]
}

// person.role.push("admin");          => error 가 아님, 타입스크립트에서 잡지 못하는 형식
// person.role[1] = 10;                => error
// person.role = [0, "admin", "user"]  => error

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()), error
}