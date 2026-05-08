class Department {
    // private id: string;
    // public name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) { // 현재 객체를 참조하는 것을 명시하여 컴파일 시점에서 오류 방지
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Faker");
accounting.addEmployee("Keria");

// accounting.employees[2] = "Oner"; // private 접근 제한자로 접근을 막을 수 있다

accounting.describe();
accounting.name = "NEW NAME"; // public 접근 제한자는 접근 가능
accounting.printEmployeeInformation();

// const accountingCopy = { name: "other", describe: accounting.describe };
// accountingCopy.describe();