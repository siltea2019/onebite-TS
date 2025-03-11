// 분산적인 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

// 유니언 타입 전체가 제네릭<T>로 들어가는 것이 아니라
// 한번은 number 타입, 한번은 string 타입으로 들어가는 것이다
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>;

// 2단계
// number |
// string |
// number

// 3단계
// number | string

// 예제 복습
// 사례1 : 유니언에서 특정 타입 제거
type Exclud<T, U> = T extends U ? never : T;

type A = Exclud<number | string | boolean, number>;
// 1단계
// Exclud<number, number> |
// Exclud<string, number> |
// Exclud<boolean, number>;

// 2단계
// number |
// never |
// boolean

// 3단계
// number | never | boolean
// never는 공집합으로 표현이 되고 공집합을 다른 타입과 합집합으로 만들면
// 3단계에서는 number 와 boolean으로 표현이 되는 것이다
// 결국 number | boolean

// 사례 2 : 유니언에서 특정 타입 주입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>;

// 2단계
// never |
// string |
// never

// 3단계
// never | string

// 최종결과
// string
