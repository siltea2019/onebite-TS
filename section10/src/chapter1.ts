// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

// Partial 타입 직접 만들어보기
type Partial<T> = {
	[key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
	title: '제목은 나중에 짓고',
	content: '컨텐츠는 뭘로 할까?',
};

// Required<T>
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

// Required 타입 직접 만들어보기
type Required<T> = {
	[key in keyof T]-?: T[key];
};

const withThumbnailPst: Required<Post> = {
	// thumbnailURL이 꼭 들어가야하는 형식으로 만들어보자
	// 하지만 interface Post로 인해서, thumbnailURL는 선택적 프로퍼티로 정해져있다
	title: '한입 TS 후기',
	tags: ['typeScript', 'TS', 'ts', '타입스크립트'],
	content: '알찼다',
	thumbnailURL: 'http://...',
};

// Readonly<T>
// 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

// Readonly 타입 직접 만들어보기
type Readonly<T> = {
	readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
	title: '보호된 게시글 입니다',
	tags: [],
	content: '보호된 게시글이므로 수정이 불가능합니다',
};

// readonlyPost.content = ""
