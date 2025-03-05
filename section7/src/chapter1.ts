// 사례 1
function swap<T, U>(a: T, b: U) {
	return [b, a];
}

const [a, b] = swap('1', 2);

// 사례 2
function returnFirstValue<T>(data: [T, ...unknown[]]) {
	return data[0];
}

let num1 = returnFirstValue([1, 2, 3]); // 1
let str1 = returnFirstValue([1, 'Hello', 'World']); // "Hello"

// 사례 3
function getLength<T extends { length: number }>(data: T) {
	return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength('123456'); // 5

let var3 = getLength({ length: 10 }); // 10

// length 프로퍼티가 없기 때문에 오류가 발생한다.
// let var4 = getLength(10)
