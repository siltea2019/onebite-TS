// any : 특정 변수의 타입을 확실히 모를때
let anyVar: any = 10; // numver
// anyVar = 'hello'; // string
// anyVar = true; // boolean
// anyVar = {}; // 객체
// anyVar = []; // 배열
// anyVar = () => {}; // 함수

// any 타입을 사용했을때 메서드도 자유롭게 사용가능
// anyVar.toUppercase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar; // num에 anyVar를 할당해도 오류가 나지 않는다

// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
unknownVar = {};

// 허용되지 않음
// num = unknownVar; // 다른변수에 할당
// unknownVar.toUppercase(); // 타입이 다른 메서드 사용X
// unknownVar.toFixed(); // 타입이 다른 메서드 사용X
// unknownVar = unknownVar + 1 // 사칙 연산 사용 X

// unknown의 타입사용 -> 타입좁히기로 사용가능
if (typeof unknownVar === 'number') {
	num = unknownVar;
}
