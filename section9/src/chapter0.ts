// 조건부 타입
// 조건에 따라 타입을 결정
type A = number extends string ? string : number;

type ObjA = {
	a: number;
};
type ObjB = {
	a: number;
	b: number;
};

// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 공백을 없애는(빈문자열로 바꾸는) 함수
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
	if (typeof text === 'string') {
		return text.replaceAll(' ', '');
	} else {
		return undefined;
	}
}

let result = removeSpaces("hi i'm siltea");
result.toUpperCase();

let result2 = removeSpaces(undefined);
