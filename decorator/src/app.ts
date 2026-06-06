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
    return function<T extends {new(...args: any[]): {name: string}}> (originalConstructor: T) {
        return class extends originalConstructor { // constructor를 변경시 해당 데코레이터가 적용된 클래스가 생성될 때 적용, 문법적 설탕
            constructor(..._: any[]) {
                super();
                console.log("Rendering template")
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
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

function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator");
    console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method Decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter  Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product{
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }else{
            throw new Error("Invalid price")
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const p1 = new Product("Book", 19);