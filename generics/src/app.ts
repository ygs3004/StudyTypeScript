const names: Array<string> = [];
// names[0].split("") // generic으로 string 타입 이므로 string split 메서드 사용가능

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("timeout");
    }, 2000)
});

promise.then(data => {
    data.split("") // generic으로 string 타입 이므로 string split 메서드 사용가능
})