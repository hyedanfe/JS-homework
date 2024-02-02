const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

인풋에 입력된 아이디가
 이메일 형식이 아니라면 error 메시지 o
인풋에 입력된 비밀번호가 특수문자 포함 6자리 이상이 아니면 에러메시지 o

인밸리드 클래스 추가 후 조건에 부합하면 클래스 제거 o

아이디 비번 값 입력 후
로그인 버튼 클릭시
아이디와 비번이 정해진 값과 일치하는 지 확인
일치하면 웰컴 페이지로 이동


*/
const idField = document.querySelector("#userEmail");
const pwField = document.querySelector("#userPassword");
const submit = document.querySelector(".btn-login");

let idInput = "";
let pwInput = "";

function handleCheckId() {
  idInput = this.value;
  if (emailReg(this.value) || this.value === "") {
    //console.log("success");
    idField.classList.remove("is--invalid");
  } else {
    //console.log("error!");
    idField.classList.add("is--invalid");
  }
}

function handleCheckPw() {
  pwInput = this.value;
  if (pwReg(this.value) || this.value === "") {
    // console.log("성공");
    pwField.classList.remove("is--invalid");
  } else {
    //console.log("error!");
    pwField.classList.add("is--invalid");
  }
}

function handleSubmit(e) {
  e.preventDefault();
  // console.log("제출!!");
  if (idInput === user.id && pwInput === user.pw) {
    window.location.href = "welcome.html";
  }
}

idField.addEventListener("input", handleCheckId);
pwField.addEventListener("input", handleCheckPw);
submit.addEventListener("click", handleSubmit);

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
