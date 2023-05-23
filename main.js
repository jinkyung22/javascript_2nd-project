var todolist = [];


var contentsEl = document.getElementById("todo-contents");
var containerEl = document.getElementById("container");

//입력박스
var inputBtnControl = Widget.button({
  label: "입력", 
  onClick : function () {
  if (!contentsEl.value) {
    alert("할일을 입력해주세요");
    return;
  }
  //Widget.getControl("todo-input");

  todolist.push({
    id: crypto.randomUUID(), // 유니크한 ID값이 나옴
    contents: contentsEl.value,
    done: false,
  });
  contentsEl.value = "";
  contentsEl.focus();

  todolistControl.reload(getSortedTodoList({ done: false }));
  donelistControl.reload(getSortedTodoList({ done: true }));
},
});

containerEl.append(inputBtnControl.el);


//todolist 랜더
var todolistControl = Widget.list("todoList", {
  datas: getSortedTodoList({ done: false }),
  columns: [
    {id: "done", render: createcheck},
    {id: "todo", render: createspan},
    {id: "delete", render: createbutton}
  ],
});

containerEl.append(todolistControl.el);

//donelist 랜더
var donelistControl = Widget.list("todoListDone", {
  datas: getSortedTodoList({ done: true }),
  columns: [
    {id: "done", render: createcheck },
    {id: "todo", render: createspan},
    {id: "delete", render: createbutton}
  ],
});

containerEl.append(donelistControl.el);

function createcheck(data){
  var checkControl = Widget.checkbox({
    label: "체크박스",
    done: data.done,
    onChange: function (e) {
    data.done = e.target.checked;
    todolistControl.reload(getSortedTodoList({ done: false }));
    donelistControl.reload(getSortedTodoList({ done: true }));
         },
  });
  return checkControl.el;
}

//필터링해주는함수
function getSortedTodoList(option) {
  return todolist.filter(item => item.done === option.done)
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
      todolistControl.reload(getSortedTodoList({ done: false }));
      donelistControl.reload(getSortedTodoList({ done: true }));
    },
  });
  return delBtnControl.el;
}


