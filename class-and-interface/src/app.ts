class Department {
    static fiscalYear = 2026;
    // private readonly id: string;
    // public name: string;
    protected employees: string[] = []; // protected => 상속 받은 경우 접근 가능

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
        // console.log(this.fiscalYear); static 메서드와 속성은 인스턴트에 속해있지 않으므로 this 로 되지 않음
    }

    static createEmployee(name: string) {
        return {
            name: name
        }
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
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }

        throw new Error("No report found");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("value is required");
        }
        this.addReport(value);
    }

    constructor(id: string, public reports: string[]) {
        super(id, "Accounting");
        this.lastReport = reports[0];
    }

    addEmployee(name: string) {
        if (name === "Ygs") {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Alice");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Yoon"]);

it.addEmployee("Faker");
it.addEmployee("Keria");

// it.employees[2] = "Oner"; // private 접근 제한자로 접근을 막을 수 있다

it.describe();
it.name = "NEW NAME"; // public 접근 제한자는 접근 가능
it.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);

// accounting.mostRecentReport = ""; value is required
accounting.mostRecentReport = "First Report";
accounting.addReport("Something Report");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Ygs");
accounting.addEmployee("Deft");

accounting.printEmployeeInformation();
accounting.printReports();