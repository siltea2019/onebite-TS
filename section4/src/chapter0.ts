// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// JS : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지
// TS : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
	return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 객체에 선택적 프로퍼티가 있듯, 함수에도 선택적 매개변수가 있다
// 주의점
// 선택적 매개변수의 경우 필수 매개변수의 앞에 위치하면 안됨
function introduce(name = '김수민', age: number, tall?: number) {
	console.log(`name : ${name}`);

	// 선택적 매개변수의 경우 undefined타입도 가지고 있게 되므로
	// 타입가드를 만들어 타입을 좁혀준다
	if (typeof tall === 'number') {
		console.log(`tall : ${tall + 3}`);
	}
}

introduce('김수민', 34, 157);
introduce('김수민', 34);

// rest parameter 매개변수
// rest parameter는 배열을 ....
// 갯수를 정해주고 싶다면 튜플 타입 이용
function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach((it) => (sum += it));
	return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
