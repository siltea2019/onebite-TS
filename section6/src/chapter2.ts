// 접근제어자 : access modifier
// => public private protected
class Employee {
    // 필드
    private name: string;
    protected age: number;
    public position: string;

    // 생성자
    constructor (name:string, age:number, position:string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일하는 중")
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor (name:string, age:number, position:string, public officeNumber:number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func () {
        // this.name;  // private 프로퍼티로 인한 오류 발생
        this.age; // protected로 파생클래스 내에서는 오류가 발생하지 않는다
    }
}

const employee = new Employee("김수민", 34, "developer")
// employee.name = "홍길동" // private 프로퍼티로 인한 오류 발생
// employee.age = 18 // protected 프로퍼티로 인한 오류 발생
employee.position = "Designer"

console.log(employee)