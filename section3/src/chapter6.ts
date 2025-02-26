// 타입 단언

type Person = {
	name: string;
	age: number;
};

let person = {} as Person;
person.name = '수민';
person.age = 33;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: '알밤',
	color: 'brown',
	breed: 'poodle',
} as Dog;

// 타입단언의 규칙
// 1. 값 as 단언 <- 단언식
// 값 = A, 단언타입 = B 라 할때
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 한다.

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
// let num4 = 10 as undefined;

// 다중단언 : 타입 단언이 가능하지 않은 타입간에 단언이 가능하게 한다
let num5 = 10 as unknown as string;

// const단언 : 변수를 선언했을때 상수를 선언한 것과 동일한 효과를 본다
let num6 = 10 as const;

// num6 = 20

// 객체의 const단언의 경우 프로퍼티가 readonly속성을 가지게 된다
let cat = {
	name: '나비',
	color: 'cheeze',
} as const;

// cat.name = '치즈';

// Non Null 단언 : 어떤 값이 null이거나 undefined타입이 아니라고 TS에게 알려줌
type Post = {
	title: string;
	author?: string;
};

let post: Post = {
	title: '게시글1',
	author: '김수민',
};

// 옵셔널 체이닝 : 프로퍼티의 값이 null 이거나 undefined일 경우에
// .표기법으로 접근할때 오류가 발생하므로
// ?를 이용해 프로퍼티가 있을경우 프로퍼티의 값을 참조하고
// 프로퍼티가 없으면 undefined를 내보낸다
// const len1: number = post.author?.length;
// non-null 단언
const len2: number = post.author!.length;
