// 프로미스
// 비동기처리를 돕는 프로미스 객체의 타입 정의
const promise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		// 성공했을때
		// resolve(20);
		// 실패했을때
		reject('~~~때문에 실패하였습니다.');
	}, 3000);
});

promise.then((response) => {
	console.log(response * 10);
});

promise.catch((err) => {
	if (typeof err === 'string') {
		console.log(err);
	}
});

// 프로미스를 반환하는 함수의 타입을 정의
// 서버로부터 하나의 게시글의 데이터를 불러오는 함수

interface Post {
	id: number;
	title: string;
	content: string;
}

function fetchPost(): Promise<Post> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				title: '게시글 제목',
				content: '게시글 컨텐츠',
			});
		}, 3000);
	});
}

const postRequest = fetchPost();
