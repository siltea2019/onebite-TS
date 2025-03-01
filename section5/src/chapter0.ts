// 인터페이스
interface Person {
	// 읽기전용 프로퍼티 & 선택적 프로퍼티 & 함수의 사용
	readonly language: string;
	name: string;
	age?: number;
	sayHi: () => void;

	// 호출 시그니쳐의 경우 기본적인 호출 시그니처와 다르게 적용된다.
	// 단 인터페이스 안의 호출 시그니쳐의 경우, 소괄호 앞에 이름을 꼭 붙여야한다.
	// 이유: 타입 자체가 함수 타입이 되어버리기 때문
	sayIntroduce(): void;
	sayIntroduce(name: string, age: number): void;
	// 함수 오버로딩을 구현하고 싶다면 호출 시그니처를 이용한다. (함수표션식 X)
	// sayHi: () => void;
	// sayHi: (a: number, b: number) => void;
}

// 타입별칭과의 차이점
// 인터페이스에서는 유니온 타입과 인터섹션 타입을 만들 수 없다.

type Type1 = number | string;
type Type2 = number & string;

const person: Person = {
	name: '김수민',
	language: 'korean',
	sayHi: function () {
		console.log('안녕');
	},
	sayIntroduce: function (name?: string, age?: number) {
		if (name !== undefined && age !== undefined) {
			console.log(`내 이름은 ${person.name}이고, ${age}살이야`);
		} else {
			console.log(`내 이름은 ${this.name}이야`);
		}
	},
};

person.sayHi();
person.sayIntroduce();
person.sayIntroduce('김수민', 34);
