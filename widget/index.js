import { createButton } from "./button.js";
import { createList } from "./list.js";
import { createcheckBox } from "./checkbox.js";
import { createSpan } from "./span.js";
import { createDiv } from "./div.js";
import { createInput } from "./input.js";

window.Widget = {
  //
  button: createButton,
  list: createList,
  checkbox: createcheckBox,
  span: createSpan,
  div: createDiv,
  input: createInput,
  
  getControl: function(id){
    return document.getElementById(id);
  }
};