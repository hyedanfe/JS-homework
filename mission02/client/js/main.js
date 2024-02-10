/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const navigation = document.querySelector(".nav");
const visual = document.querySelector(".visual img");
const nickname = document.querySelector(".nickName");
const ul = document.querySelector(".nav ul");

function changeBackground(e) {
  const target = e.target.closest("li");
  const index = target.dataset.index;
  const [color1, color2] = data[index - 1].color;
  document.body.style.background = `linear-gradient(to bottom,${color1},${color2})`;
}
function changeImage(e) {
  const target = e.target.closest("li");
  const index = target.dataset.index;
  const character = data[index - 1].name.toLowerCase();
  visual.setAttribute("src", `./assets/${character}.jpeg`);
  visual.setAttribute("alt", data[index - 1].alt);
}

function changeText(e) {
  const target = e.target.closest("li");
  const index = target.dataset.index;
  nickname.textContent = data[index - 1].name;
}

function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest("li");
  const index = target.dataset.index;
  const list = [...ul.children];

  if (!target) return;

  list.forEach((li) => {
    li.classList.remove("is-active");
  });
  target.classList.add("is-active");

  changeBackground(e);
  changeImage(e);
  changeText(e);
}

// navigation.addEventListener("click", changeBackground);
// navigation.addEventListener("click", changeImage);
// navigation.addEventListener("click", changeText);
navigation.addEventListener("click", handleClick);
