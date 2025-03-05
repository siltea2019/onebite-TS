// 제네릭 클래스
class List<T> {
	constructor(private list: T[]) {}

	push(data: T) {
		this.list.push(data);
	}

	pop() {
		return this.list.pop();
	}

	print() {
		console.log(this.list);
	}
}

const numberList = new List([1, 2, 3, 4, 5]);
numberList.pop();
numberList.push(3);
numberList.print();

const stringList = new List(['one', 'two', 'three']);
stringList.pop();
stringList.push('zero');
stringList.print();
