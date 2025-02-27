// 사용자 정의 타입가드

type Dog = {
	name: string;
	isBark: boolean;
};

type Cat = {
	name: string;
	isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
	return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isScratch !== undefined;
}

// 타입 Dog와 Cat의 타입을 수정하지 못하는 상황 -> 서로소 유니온 타입 사용X
function warning(animal: Animal) {
	if (isDog(animal)) {
		console.log(`${animal.name}강아지는 짖습니다.`);
		animal;
	} else if ('isScratch' in animal) {
		console.log(`${animal.name}고양이는 할큅니다.`);
		animal;
	}
}
