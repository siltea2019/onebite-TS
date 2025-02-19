// 타입 별칭
type User = {
	id: number;
	name: string;
	nickname: string;
	birth: string;
	bio: string;
	location: string;
};

let user: User = {
	id: 1,
	name: 'siltea',
	nickname: 'silvertear',
	birth: '1992.04.07',
	bio: '반갑습니다',
	location: '부산시',
};

let user2: User = {
	id: 2,
	name: 'siro',
	nickname: 'sirou',
	birth: '1992.04.07',
	bio: '반갑습니다',
	location: '부산시',
};

// 인덱스 시그니쳐
type CountryCodes = {
	[key: string]: string;
};

let countryCodes: CountryCodes = {
	Korea: 'ko',
	UnitedState: 'us',
	UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
	[key: string]: number;
	Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
	Korea: 410,
	UnitedState: 840,
	UnitedKingdom: 826,
};
