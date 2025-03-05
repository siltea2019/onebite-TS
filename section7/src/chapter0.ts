// 제네릭 : 모든 타입에 쓸 수 이는 범용적인 함수다
// 함수의 인수에 따라서 반환 값의 타입을 가변적으로 정해준다
function func<T>(value: T): T {
	return value;
}

let numFunc = func(1);

let boolFunc = func(false);

let strFruc = func('string');

console.log(`numFunc 타입: ${typeof numFunc}`);
console.log(`boolFunc 타입: ${typeof boolFunc}`);
console.log(`strFruc 타입: ${typeof strFruc}`);

// any: 타입과 맞지 않는 메서드를 사용해도 오류가 발생하지 않는다
// unknown : 타입과 맞지 않는 메서드를 사용하면 오류가 발생하지만
// => 타입과 일치하는 메서드를 사용해도 오류가 발생한다
let num = func(10);
num.toFixed();

let bool = func(true);

let str = func('string');
str.toUpperCase();

let arr = func<[number, number, number]>([1, 2, 3]);
