// tsconfig.json 옵션 "experimentalDecorators": true, 추가 필수

// 데코레이터
function Logger(logString: string) {
    return function (constructor: Function) {
        console.info(logString);
        console.log(constructor);
    }

}

function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}

// @Logger("Logging - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Ygs";

    constructor() {
        console.log("Create Person.....");
    }
}

const person = new Person();

console.log(person);