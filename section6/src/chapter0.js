// 클래스
let studentA = {
	name: '김수민',
	grade: 'A+',
	age: 34,
	study() {
		console.log('열심히 공부 함');
	},
	introduce() {
		console.log('안녕하세요');
	},
};

class Student {
	// 필드 설정 : 클래스가 만들어낼 객체 프로퍼티, 즉 모양 지정
	name;
	grade;
	age;

	// 생성자 : 클래스 호출 시, 실제로 객체를 생성하는 역할을 하는 함수
	// => 객체를 생성하는 메서드 = constructor
	constructor(name, grade, age) {
		// this는 생성하고 있는 이 객체의 매개변수로 들어온 값을 똑같이 설정해주는 것
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	// 메서드
	study() {
		console.log('열심히 공부 함');
	}

	introduce() {
		console.log('안녕하세요');
	}
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 예시) 스튜던트 인스턴스 생성
let studentB = new Student('은루', 'B0', 33);
console.log(studentB);
studentB.study();
studentB.introduce();

// 복습
class StudentDeveloper {
	name;
	grade;
	age;
	favoriteSkill;

	constructor(name, grade, age, favoriteSkill) {
		this.name = name;
		this.grade = grade;
		this.age = age;
		this.favoriteSkill = favoriteSkill;
	}

	study() {
		console.log(`${this.favoriteSkill}로 공부중 입니다!`);
	}

	introduce() {
		console.log(`안녕하세요. ${this.name}이라고 합니다.`);
	}

	programming() {
		console.log(`${this.favoriteSkill}로 프로그래밍 함`);
	}
}

const studentDeveloper = new studentDeveloper('김수민', 'A+', 34, 'JavaScript');
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스 상속 및 복습
class StudentUniversity extends Student {
	major;

	constructor(name, grade, age, major) {
		super(name, grade, age);
		this.major = major;
	}

	getMajor() {
		console.log(`현재${this.major}에 재학중입니다.`);
	}
}

const studentUniversity = new StudentUniversity('김땡땡', 'A0', 23, 'Business Administration');
studentUniversity.getMajor();
