// 타입 추론
let a = 108;
let b = 'hello';

let c = {
	id: 0,
	name: '김수민',
	profile: {
		nickname: 'siltea',
	},
	urls: ['http://siltea.kyo.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hi', 'true'];

function func(message = 'hello') {
	return 'hello';
}

// any 타입의 진화
let d;
d = 10;
d.toFixed();
// d.toUpperCase();

d = 'hi';
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = 'hi';

let arr = [1, 'string'];
