// 함수타입의 호환성 : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단

// 체크리스트
// 기준1. 반환값의 타입이 호환되는가
// 기준2. 매개변수의 타입이 호환되는가

// 기준1. 반환값이 호환되는가
// 반환값의 타입끼리는 업캐스팅하는 상황에서는 호환, 다운캐스팅하는 상황에서는 호환 되지않는다
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a;

// 기준2. 매개변수의 타입이 호환되는가
// 매개변수의 타입끼리는 업캐스팅하는 상황에서는 호환되지 않고, 다운캐스팅 하는 상황에서는 호환된다
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d
d = c;

// 매개변수가 객체타입을 사용하는 예시
type Animal = {
	name: string;
};

type Dog = {
	name: string;
	color: string;
};

let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc1 = (animal: Animal) => {
	console.log(animal.name);
	// console.log(animal.color);
};
let testFunc2 = (dog: Dog) => {
	console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 갯수가 다를 때에는 할당하려고 하는 쪽의 함수의 타입에 매개변수의 갯수가 적을 때에만 호환이 된다
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
