// 인덱스드 엑세스 타입
// 인덱스를 이용하여 다른타입내에 특정 프로퍼티 타입을 추출하는 타입
// 객체 배열 튜플에 모두 사용

// 객체 예시
interface Post {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		location: string;
	};
}

function printAuthorInfo(author: Post['author']) {
	console.log(`${author.name}-${author.id}`);
}

const post: Post = {
	title: '제목',
	content: '본문',
	author: {
		id: 1,
		name: '김수민',
		location: '부산',
	},
};

// 배열 예시
type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		location: string;
	};
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
	console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
	title: '제목',
	content: '본문',
	author: {
		id: 1,
		name: '김수민',
		location: '부산',
	},
};

// 튜플 예시
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// 튜플 외 요소를 지정하려 하면 오류가 발생한다
// type Tup3 = Tup[3];

type TypNum = Tup[number];
