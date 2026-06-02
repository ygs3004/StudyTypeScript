// tsconfig.json 옵션 "experimentalDecorators": true, 추가 필수

// 데코레이터
function Logger(constructor: Function) {
    console.info("Logging....");
    console.log(constructor);
}

@Logger
class Person {
    name = "Ygs";

    constructor() {
        console.log("Create Person.....");
    }
}

const person = new Person();

console.log(person);