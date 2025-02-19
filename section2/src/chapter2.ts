// 배열
let numArrL: number[] = [1, 2, 3];

let strArr: string[] = ['Hello', "i'm", 'siltea'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// Hint! TS의 자동추론 이용하기
let multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의 하는 방법
let duoubleArr: number[][] = [
	[1, 2, 3],
	[4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, '2', true];


// 배열 메서드도 자유롭게 사용이 가능하다
tup1.push(1);
tup1.pop();

// 튜플의 사용
const users: [string, number][] = [
	['김수로왕', 1],
	['박혁거세', 2],
	['왕건', 3],
	['고주몽', 4],
	['온조', 5],
];
