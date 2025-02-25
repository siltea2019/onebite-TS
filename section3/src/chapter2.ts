// 스코프 분리를 위한 함수 생성

// Unknown 타입
function unknownExam() {
	let a: unknown = 1;
	let b: unknown = 'hello';
	let c: unknown = true;
	let d: unknown = null;
	let e: unknown = undefined;
	let f: unknown = {};
	let g: unknown = [];
	let h: unknown = function () {
		return console.log('unknown타입을 가지는 함수');
	};

	let unknownVar: unknown;

	// let num: number = unknownVar;
	// let str: string = unknownVar;
	// let bool: boolean = unknownVar;
}

// never 타입
function neverExam() {
	function neverFunc(): never {
		while (true) {}
	}

	let num: number = neverFunc();
	let str: string = neverFunc();
	let bool: boolean = neverFunc();

	// let never1: never = 12
	// let never2: never = "str"
	// let never3: never = true
}

// void 타입: 리턴문 자체가 없는 함수의 반환값 타입을 명시
function voidExam() {
	function voidFunc(): void {
		console.log('hi');
		return undefined;
	}

	let voidVar: void = undefined;
}

// any 타입
function anyExam() {
	let anyVar: any;
	let unknownVar: unknown;
	let undefinedVar: undefined;

	anyVar = unknownVar;
	unknownVar = anyVar;

	anyVar = undefinedVar;
	undefinedVar = anyVar;

	//예외
	let neverVar: never;
	// neverVar = anyVar;
}
