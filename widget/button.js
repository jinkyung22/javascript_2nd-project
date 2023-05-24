export function createButton(id, option) {
  var el = document.createElement("button");
  //el.id = id;
  el.textContent = option.label;
  el.onclick = option.onClick; // onClick은 콜백함수

  //el를 바로 사용하지 못하도록 하려고 el을 래핑한 담에 반환
  return {
    id: id, // 객체에 ID를 부여
    el: el,
  };
}
