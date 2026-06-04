// tsconfig.json 옵션 "experimentalDecorators": true, 추가 필수

// 데코레이터
function Logger(logString: string) {
    console.log("Logger Factory");

    return function (constructor: Function) {
        console.info(logString);
        console.log(constructor);
    }

}

function WithTemplate(template: string, hookId: string) {
    console.log("Template Factory");

    return function (constructor: any) {
        console.log("Rendering template")
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}

// factory function 자체는 위에서 아래로
// factory function 에서 return 한 데코레이터 function 은 아래에서 위 순서 실행된다.
@Logger("Logging - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Ygs";

    constructor() {
        console.log("Create Person.....");
    }
}

const person = new Person();

console.log(person);