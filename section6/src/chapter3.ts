// 인터페이스와 클래스
interface CharacterInterface {
    name: string;
    movespeed: number;
    move(): void;
}

class character implements CharacterInterface {
    constructor (
        public name: string,
        public movespeed: number,
        private extra: string,
    ) {}
    move() {
        console.log(`${this.movespeed}로 이동합니다!`)
    }
}

