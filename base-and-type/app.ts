function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void { // undefined 반환 됨
    console.log("Result: " + num);
}

printResult(add(5, 12))