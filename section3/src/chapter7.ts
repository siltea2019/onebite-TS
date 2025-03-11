// 타입좁히기 : 조건문 등을 이용해 넓은타입에서 좁은타입으로 타입을 상황에 따라 좁히는 방법
type Person = {
	name: string;
	age: number;
};

// value => number : toFixed
// value => string : toupperCase
// value => Date : getTime
// value => Person : name은 age살 입니다
function func(value: number | string | Date | null | Person) {
	// 타입을 좁히기 전에는
	// value => string | number 타입으로 추론이 됨
	// value;
	// value.toFixed();
	// value.toUpperCase();

	if (typeof value === 'number') {
		console.log(value.toFixed());
	} else if (typeof value === 'string') {
		console.log(value.toUpperCase());
	} else if (value instanceof Date) {
		console.log(value.getDate);
	} else if (value && 'age' in value) {
		console.log(`${value.name}은 ${value.age}살 입니다`);
	}
}
