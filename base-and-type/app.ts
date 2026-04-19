let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ygs";
// userName - userInput; 컴파일 오류, unknown이 아닌 any 일 경우 가능

if(typeof userInput === "string"){
  userName = userInput; // 타입 체크 후에 사용시 컴파일 오류 발생 안함
}