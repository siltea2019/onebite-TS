// enum 타입: 열거형타입 (TS에서만 제공되는 타입)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
	LEADER,
	DANCER = 6,
	RAPPER,
}

enum Language {
	korean = 'ko',
	english = 'en',
}

// ex_사용예시
const user1 = {
	name: '남예준',
	role: Role.LEADER, // 0 <- 리더
	language: Language.korean,
};
const user2 = {
	name: '채밤비',
	role: Role.DANCER, // 1 <- 메인댄서
	language: Language.korean,
};
const user3 = {
	name: '도은호',
	role: Role.RAPPER, // 2 <- 메인래퍼
	language: Language.english,
};

console.log(user1, user2, user3);
