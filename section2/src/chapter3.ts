// 객체(object)
let user: {
	id?: number;
	name: string;
} = {
	id: 1,
	name: 'siltea',
};

let dog: {
	name: string;
	color: string;
} = {
	name: '찹쌀떡',
	color: 'white',
};

user.id;

// 선택적 프로퍼티 (or 옵셔널 프로퍼티 "?"로 표시)
user = {
	name: 'idol',
};

// readonly : 프로퍼티의 value값을 바꾸지 못하게 한다
let config: {
	readonly apiKey: string;
} = {
	apiKey: 'MY API KEY',
};

config.apiKey = 'hacked';
