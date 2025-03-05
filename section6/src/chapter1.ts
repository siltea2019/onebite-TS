// 타입스크립트의 클래스
const employee = {
	name: '김수민',
	age: 34,
	position: 'developer',
	work() {
		console.log('일하는 중');
	},
};

class Employee {
	// 타입을 정하기 전에는 암시적으로 any타입이 포함된다는 오류 출력
	// 필드
	name: string;
	age: number;
	position: string;

	// 필드에 타입만 지정해 둔다면 이니셜라이저가 안되어있다는 오류발생
	// => 생성자안에서 타입과 할당을 해준다면 오류는 사라진다
	// 생성자
	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}

	// 메서드
	work() {
		console.log('일하는 중');
	}
}

class ExecutiveOfficer extends Employee {
	// 필드
	officeNumber: number;

	// 생성자
	constructor(name: string, age: number, position: string, officeNumber: number) {
		super(name, age, position);
		this.officeNumber = officeNumber;
	}
}

const employeeB = new Employee('김수만', 34, 'FrontEnd');
employeeB.work();

const employeeC: Employee = {
	name: '홍길동',
	age: 18,
	position: 'Heroic Bandit',
	work() {
		console.log('의적 활동중입니다.');
	},
};
