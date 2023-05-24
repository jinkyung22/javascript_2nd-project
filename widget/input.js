export function createInput(id) {
  var el = document.createElement("input");
  el.id = id;

  return {
    el: el,
    getValue: function () {
      return el.value;
    },
    clear: function () {},
    focus: function () {},
  };
}
