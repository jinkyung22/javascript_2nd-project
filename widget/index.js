import { createButton } from "./button.js";
import { createList } from "./list.js";
import { createcheckBox } from "./checkbox.js";
import { createSpan } from "./span.js";

window.Widget = {
  //
  button: createButton,
  list: createList,
  checkbox: createcheckBox,
  span: createSpan,
  
  getControl: function(id){
    //뭔가만들기
  }
};