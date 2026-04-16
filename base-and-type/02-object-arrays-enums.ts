// 오브젝트의 형태로 타입추론
// let person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // 명시적 선언으로 튜플 타입 부여
// } = {
//     name: "Ygs",
//     age: 30,
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "autor"]
// }

// person.role.push("admin");          => error 가 아님, 타입스크립트에서 잡지 못하는 형식
// person.role[1] = 10;                => error
// person.role = [0, "admin", "user"]  => error

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// TypeScript Enum 타입
enum Role {
    ADMIN, READ_ONLY, AUTHOR
}
// enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR = "AUTHOR" }, 값 직접 지정도 가능

console.log(Role)

const person = {
    name: "Ygs",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
}

if(person.role === Role.ADMIN) {
    console.log("is ADMIN")
}


let favoriteActivities: any[]; // 타입의 값이 무엇인지 불확실
favoriteActivities = ["Sports", 1, 2, "Cooking"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()), error
}