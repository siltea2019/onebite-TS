// number : 숫자타입
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.1234;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

num1 = 'hello'; // 문자타입 할당 X
num1.toUpperCase(); // 문자타입 메서드 사용 X
num1.toFixed(); // 숫자타입 메서드 사용 O

// string
let str1: string = 'hello';
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1 = 123; // 숫자타입 할당 X
str1.toFixed(); // 숫자타입 메서드 사용 X
str1.toUpperCase(); // 문자타입 메서드 사용 O

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

bool1 = 123;
bool1 = 'boolean';

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// "strictNullChecks": false
let numStrictNull: number = null;

// 리터럴 타입 - 리터럴 : 값
let numA: 10 = 10;
numA = 12;

let strA: 'hello' = 'hello';
strA = 'bye';

let boolA: true = true;
boolA = false;
