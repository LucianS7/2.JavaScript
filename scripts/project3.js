const todoList = JSON.parse(localStorage.getItem('todoList'))

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

renderTodoList();

checkbox();

function checkbox () {
  document.querySelectorAll('.js-checkbox')
   .forEach((checkbox, index) => {
      checkbox.addEventListener('click', () => {
        if (!todoList[index].done) {
          todoList[index].done = true;
          console.log(todoList);
          localStorage.setItem('todoList', JSON.stringify(todoList));
        } else {
          todoList[index].done = false;
          localStorage.setItem('todoList', JSON.stringify(todoList));
        }
      })
    });
} 

function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate, done} = todoObject
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <input type="checkbox" class="js-checkbox checkbox">
      <button class="js-delete-todo-button delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        renderTodoList();
      });
    });

  todoList.forEach((todoObject, index) => {
    if (todoObject.done) {
      const checkboxes = document.querySelectorAll('.js-checkbox');
      checkboxes[index].checked = true;
    }
  });
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate,
    done: false
  });
  
  inputElement.value = '';

   localStorage.setItem('todoList',JSON.stringify(todoList));

  renderTodoList();
  checkbox();
}


