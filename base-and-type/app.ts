let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ygs";
// userName - userInput; 컴파일 오류, unknown이 아닌 any 일 경우 가능

if(typeof userInput === "string"){
  userName = userInput; // 타입 체크 후에 사용시 컴파일 오류 발생 안함
}

function generateError(message: string, code: number): never { // return 값이 없는 type 초기 타입스크립트에는 없었음, void 의 경우 undefined
    // 오류를 던지는 경우
    throw {message: message, errorCode: code};

    // 무한재귀함수의 경우
    // while (true) {}
}

generateError("An error occurred", 500);