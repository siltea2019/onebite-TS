// map 메서드
// 기본 map 메서드의 사용
const arr3 = [1, 2, 3];
const newArr = arr3.map((it) => it * 2); // 2, 4, 6

// 제네릭 타입을 이용한 map 메서드 사용
function map<T, U>(arr: T[], callback: (item: T) => U) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
}

map(arr3, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it));

// forEach 메서드
// 기본 forEach 메서드의 사용
arr3.forEach((it) => console.log(it));

// 제네릭 타입을 이용한 forEach 메서드 사용
function forEach<T>(arr: T[], callback: (item: T) => void) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

forEach(arr3, (it) => {
	console.log(it.toFixed());
});

forEach(['123', '456', '789'], (it) => {
	it;
});
