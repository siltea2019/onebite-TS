// 제네릭 인터페이스
interface KeyPair<K, V> {
	key: K;
	value: V;
}

let keypair: KeyPair<string, number> = {
	key: 'key',
	value: 0,
};

let keypair2: KeyPair<boolean, string[]> = {
	key: true,
	value: ['참', '거짓'],
};

// 인덱스 시그니쳐의 단독 사용
interface NumberMap {
	[key: string]: number;
}

let numberMap1: NumberMap = {
	key: -12345,
	key2: 12345,
};

// 제네릭 인터페이스 + 인덱스 시그니쳐
interface Map<V> {
	[key: string]: V;
}

let stringMap: Map<string> = {
	key: 'value',
};

let booleanMap: Map<boolean> = {
	key: false,
};

// 제네릭 타입 별칭
type Map2<V> = {
	[key: string]: V;
};

let stringMap2: Map2<string> = {
	key: 'TypeScript',
};

// 제네릭 인터페이스 활용 예시
// => 유저 관리 프로그램
// => 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
	type: 'student';
	school: string;
}

interface Developer {
	type: 'developer';
	skill: string;
}

interface User<V> {
	name: string;
	profile: V;
}

function goToScool(user: User<Student>) {
	const school = user.profile.school;
	console.log(`${school}로 등교완료`);
}

const developerUser: User<Developer> = {
	name: '김수민',
	profile: {
		type: 'developer',
		skill: 'TypeScript',
	},
};

// 타입이 일치하지 않는 변수를 집어넣어 오류
// goToScool(developerUser);

const studentUser: User<Student> = {
	name: '홍길동',
	profile: {
		type: 'student',
		school: '한남대학교',
	},
};
