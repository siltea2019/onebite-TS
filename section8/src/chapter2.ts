// keyof 연산자
// 객체 타입에 적용하는 연산자

interface Person {
	name: string;
	age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
	return person[key];
}

const person: Person = {
	name: '김수민',
	age: 33,
};

getPropertyKey(person, 'name'); // "김수민"

// typeof 연산자와의 사용
type Person0 = typeof person0;

const person0 = {
	name: '김수민',
	age: 33,
	location: '부산',
};

function getPersonKey(person: Person0, key: keyof typeof person0) {
	return person[key];
}
