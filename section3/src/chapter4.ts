// 대수타입
// -> 여러 타입을 합성해서 새롭게 만들어낸 타입
// -> 대수 타입에는 합집합 타입과 교집합 타입이 존재한다

// 합집합: Union타입 (|)
let a: string | number | boolean;
a = 2;
a = 'hello';

a = true;

let arr: (number | string | boolean)[] = [1, ' hello', false];

type Dog = {
	name: string;
	color: string;
};

type Person = {
	name: string;
	language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
	name: '설기',
	color: 'white',
};
let union2: Union1 = {
	name: '수민',
	language: 'korean',
};
let union3: Union1 = {
	name: '설기',
	color: 'white',
	language: 'dog language',
};
// let union4: Union1 = {
// 	name: '수민',
// };

// 교집합: Intersection 타입
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
	name: '멍멍이',
	color: 'brown',
	language: 'dog',
};
