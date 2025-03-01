// 인터페이스의 확장
interface Animal {
	name: string;
	color: string;
}

// 타입 별칭
type Feline = {
	sex: 'Male' | 'Female';
};

interface Dog extends Animal {
	isBark: boolean;
}

// 타입별칭을 이용한 인터페이스의 확장 및 상속
interface Cat extends Animal, Feline {
	isScratch: boolean;
}

// 인터페이스의 슈퍼타입 재정의
interface Chicken extends Animal {
	name: 'Puradak';
	isFly: boolean;
}

// interface 설정해보기
const dog: Dog = {
	name: '',
	color: '',
	isBark: true,
};

const cat: Cat = {
	name: '',
	color: '',
	isScratch: false,
	sex: 'Female',
};

const chicken: Chicken = {
	//서브타입에서 string literal로 설정했기 때문에 아래와 같이 오류발생
	// name:"",
	name: 'Puradak',
	color: '',
	isFly: false,
};

// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
	name: '',
	color: '',
	isBark: false,
	isScratch: false,
	sex: 'Male',
};
