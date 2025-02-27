// 서로소 유니온 타입 : 교집합이 없는 타입들로만 만든 유니온 타입
import { error } from 'console';

type Admin = {
	tag: 'ADMIN';
	name: string;
	kickCount: number;
};

type Member = {
	tag: 'MEMBER';
	name: string;
	point: number;
};

type Guest = {
	tag: 'GUEST';
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
	// 직관적이지 않은 방법
	if ('kickCount' in user) {
		console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
	} else if ('point' in user) {
		console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
	} else {
		console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문 하셨습니다.`);
	}

	// 개선방안 1: 각 type의 프로퍼티에 tag를 추가
	if (user.tag === 'ADMIN') {
		console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
	} else if (user.tag === 'MEMBER') {
		console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
	} else {
		console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문 하셨습니다.`);
	}

	// 개선방안 2 : 스위치문으로 변경하여 tag를 직관적으로
	switch (user.tag) {
		case 'ADMIN':
			console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
			break;
		case 'MEMBER':
			console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
			break;
		case 'GUEST':
			console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문 하셨습니다.`);
			break;
	}
}

// 복습 & 사례상황 : 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
	state: 'LOADING';
};

type FailedTask = {
	state: 'FAILED';
	error: {
		massage: string;
	};
};

type SuccessTask = {
	state: 'SUCCESS';
	response: {
		data: string;
	};
};

type AsycTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 콘솔에 에러메세지 출력
// 성공 -> 성공 : 콘솔에 데이터 출력
function processResult(task: AsycTask) {
	switch (task.state) {
		case 'LOADING':
			console.log('데이터를 로딩중입니다.');
			break;
		case 'FAILED':
			console.log(`에러 발생: ${task.error.massage}`);
			break;
		case 'SUCCESS':
			console.log(`성공 : ${task.response.data}`);
			break;
	}
}

const loading: AsycTask = {
	state: 'LOADING',
};

const failed: AsycTask = {
	state: 'FAILED',
	error: {
		massage: '오류가 발생했습니다. 원인 코드: ~~~~',
	},
};

const success: AsycTask = {
	state: 'SUCCESS',
	response: {
		data: '데이터 ~~',
	},
};
