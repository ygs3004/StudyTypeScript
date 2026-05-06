class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) { // 현재 객체를 참조하는 것을 명시하여 컴파일 시점에서 오류 방지
        console.log("Department: " + this.name);
    }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { name: "other", describe: accounting.describe };
accountingCopy.describe();