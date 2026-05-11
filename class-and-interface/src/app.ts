class Department {
    // private readonly id: string;
    // public name: string;
    protected employees: string[] = []; // protected => 상속 받은 경우 접근 가능

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) { // 현재 객체를 참조하는 것을 명시하여 컴파일 시점에서 오류 방지
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        // this.id = "another" // readonly 는 변경 불가
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]) {
        super(id, "Accounting");
    }

    addEmployee(name: string) {
        if (name === "Ygs") {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("d1", ["Yoon"]);

it.addEmployee("Faker");
it.addEmployee("Keria");

// it.employees[2] = "Oner"; // private 접근 제한자로 접근을 막을 수 있다

it.describe();
it.name = "NEW NAME"; // public 접근 제한자는 접근 가능
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

accounting.addEmployee("Ygs");
accounting.addEmployee("Deft");
accounting.printEmployeeInformation();

accounting.addReport("Something");
accounting.printReports();