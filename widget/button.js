export function createButton(option){
  var el = document.createElement("button");
  el.textContent = option.label;
  el.onclick = option.onClick; // onClick은 콜백함수

  //el를 바로 사용하지 못하도록 하려고 el을 래핑한 담에 반환
  return {
    el: el,
  };
}