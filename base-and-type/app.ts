function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void { // undefined 반환 됨
    console.log("Result: " + num);
}

printResult(add(5, 12))

// let combineValues: Function // 함수의 변수 및 리턴 타입 오류를 적절히 잡아낼 수 없음
let combineValues: (a: number, b: number) => number;
combineValues = add;

// 컴파일 오류
// combineValues = 5;
// combineValues = printResult();

console.log(combineValues(8 ,8))