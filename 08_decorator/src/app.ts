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

// descriptor 를 변경하는 메서드 데코레이터
function AutoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // getter 내부의 this 는 getter를 정의한 객체를 가리킴
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    }
    return adjDescriptor;
}

class Printer {
    message = "This works";

    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p)); Autobind를 쓰지 않을경우
button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}
const registeredValidators: ValidatorConfig = {

};

//constructor.name => class name
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for (const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop]
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p
    }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", event => {
    event.preventDefault();

    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);

    if(!validate(createCourse)) {
        alert("Invalid input")
        return;
    }
    console.log(createCourse);
});