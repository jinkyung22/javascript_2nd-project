export function createSpan(option){
  var el = document.createElement("span");
  el.textContent = option.content;
  
  //el를 바로 사용하지 못하도록 하려고 el을 래핑한 담에 반환
  return {
    el: el,
  };
}