// tsconfig.json 옵션 "experimentalDecorators": true, 추가 필수

// 데코레이터
function Logger(logString: string) {
    return function (constructor: Function) {
        console.info(logString);
        console.log(constructor);
    }

}

@Logger("Logging - Person")
class Person {
    name = "Ygs";

    constructor() {
        console.log("Create Person.....");
    }
}

const person = new Person();

console.log(person);