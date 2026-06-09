let appId = "123" // 전역변수 noUnusedLocals 무관
const button = document.querySelector(".button");

function add(n1: number, n2: number) {
    if (n1 + n2 < 0) {
        return n1 + n2;
    }

    // return; noImplicitReturns 시 리턴 함수는 항상 리턴 필요
}

function clickHandler(message: string) {
    // let userName = "Ygs"; , noUnusedLocals 체크
    console.log("clicked: " + message);
}

if (button) {
    button.addEventListener("click", clickHandler.bind(null, "button"));
}
