var todolist = [];

// todolist랑 donelist 일단 전역에 선언(리로드해야되니깐)
var todolistControl;
var donelistControl;

function onClickSave () {
  var contentsEl = document.getElementById("todoInput");
  if (!contentsEl.value) {
    alert("할일을 입력해주세요");
    return;
  }

  todolist.push({
    id: crypto.randomUUID(), // 유니크한 ID값이 나옴
    contents: contentsEl.value,
    done: false,
  });
  contentsEl.value="";
  contentsEl.focus();

  reloadLists();
};

function createcheck(data){
  var checkControl = Widget.checkbox({
    label: "체크박스",
    done: data.done,
    onChange: function (e) {
    data.done = e.target.checked;
    reloadLists();
         },
  });
  return checkControl.el;
}

//필터링해주는함수
function getSortedTodoList(option) {
  return todolist.filter(item => item.done === option.done) // true > done
}

function createspan(data){
  var spanControl = Widget.span({
    label: "span",
    content: data.contents,
  });
  return spanControl.el;
}

function createbutton(data){
  var delBtnControl = Widget.button({
    label: "삭제",
    onClick: function(){
      todolist.splice(todolist.indexOf(data), 1);
      reloadLists();
    },
  });
  return delBtnControl.el;
}

function reloadLists() {
  if (todolistControl && donelistControl) {
    todolistControl.reload(getSortedTodoList({ done: false }));
    donelistControl.reload(getSortedTodoList({ done: true }));
  }
}

function render() {
  var root = document.getElementById("contents");
  var div = Widget.div("container", { parent: root });

  div.append(Widget.input("todoInput"));
  div.append(Widget.button("btnSave", { label: "입력", onClick: onClickSave }));
  div.append(
    Widget.list("todoList", {
      datas: getSortedTodoList({ done: false }),
      columns: [
        {id: "done", render: createcheck},
        {id: "todo", render: createspan},
        {id: "delete", render: createbutton}
      ],
    })
  );
  div.append(
    Widget.list("doneList", {
      datas: getSortedTodoList({ done: true }),
      columns: [
        {id: "done", render: createcheck },
        {id: "todo", render: createspan},
        {id: "delete", render: createbutton}
      ],
    })
  );
  reloadLists();
}

render();
