// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add0 = (a: number, b: number): number => a + b;
const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mutiple: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)
type Operation2 = {
	(a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mutiple2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 하이브리드 타입
type Operation3 = {
	(a: number, b: number): number;
	name: string;
};

const add3: Operation3 = (a, b) => a + b;
add3(1, 2);
add3.name;
