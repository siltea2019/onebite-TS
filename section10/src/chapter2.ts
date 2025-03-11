// Pick<T, K>
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
interface Post {
	title: string;
	tags: string[];
	content: string;
	thumbnailURL?: string;
}

// Pick 타입 직접 구현해보기
type Pick<T, K extends keyof T> = {
	// K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
	// 'title' |  'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
	[key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
	title: '옛날 글',
	content: '옛날에 작성된 글',
};

// Omit
const noTitlePost: Omit<Post, 'title'> = {
	tags: [''],
	content: '본문글',
	thumbnailURL: 'http://...',
};

// Omit 타입 직접 구현해보기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<key of T, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL''>>

// Record
// 객체 타입을 새롭게 정의할 때 인덱스 시그니쳐처럼 유연하지만 조금 더 제한적인 객체타입

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string; size: string }>;

// Record 타입 직접 구현해보기
type Record<K extends keyof any, V> = {
	[key in K]: V;
};
