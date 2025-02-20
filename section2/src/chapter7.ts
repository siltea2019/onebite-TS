// void(공허, 아무것도 없다): 아무것도 없음을 의미하는 타입

// 문자열을 반환하는 함수
function func1(): string {
	return 'hello';
}

// 반환값, 반환문이 없는 함수
function func2(): void {
	console.log('hello');
}

// let a: void;
// a = 1;
// a = 'hello';
// a = {};
// a = undefined;

// never: 존재하지 않는, 불가능한 타입, 모순
function func3(): never {
	while (true) {}
}

function func4(): never {
	throw new Error();
}

// let anyVar: any;

// let b: never;
// b = 1;
// b = 'hello';
// b = {};
// b = undefined;
// b = null;
// b = anyVar;

// undefined
function func5(): undefined {
	console.log('hello');
	return;
}

// 또는
function func6(): undefined {
	console.log('hello');
	return undefined;
}

// null
function func7(): null {
	console.log('hello');
	return null;
}
