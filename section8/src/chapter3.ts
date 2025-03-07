// 맵드 타입
interface User {
	id: number;
	name: string;
	age: number;
}

// 선택적, 읽기전용 맵드 타입
type PartialUser = {
	[key in 'id' | 'name' | 'age']?: User[key];
};

type ReadonlyUser = {
	readonly [key in keyof User]: User[key];
};

// 프로퍼티를 모두 같은 타입으로 설정할수 있다
type BooleanUser = {
	[key in 'id' | 'name' | 'age']: boolean;
};

type KeyUser = {
	[key in keyof User]: string;
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
	// ... 불러오는 기능
	return {
		id: 1,
		name: '김수민',
		age: 34,
	};
}

// readonly속성을 부여했으므로 오류가 나타난다
// const user = fetchUser()
// user.id = 2

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
	// ... 수정하는 기능
}

updateUser({
	id: 1,
	name: '이정환',
	age: 27,
});
