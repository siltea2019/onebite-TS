// hello.ts
export const hello = (message) => {
	// compilerOptions - "skipLibCheck" : true로 할경우 TS에서는 매개변수의
	// 타입을 무엇인지 알수 없기 때문에(any 타입) 오류가 발생한다
	console.log('Hello ' + message);
};
