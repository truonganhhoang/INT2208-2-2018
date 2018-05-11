var button = document.getElementById('add');
var input = document.getElementById('input');
var list = document.getElementById('list');

/**
 * Remove to-do
 *
 * @param index
 */
function removeTodoFromStorage(index) {
    var todos = getTodosFromStorage();

    todos.splice(index, 1);
   // alert(todos[index].completed);

    saveTodosToStorage(todos);
}
function changeTodoFromStorage(index) {
    var todos = getTodosFromStorage();

   // alert(todos[index].completed);
   if(todos[index].completed == false){
     todos[index].completed = true;
   }
   else{
    todos[index].completed = false;
   }
   saveTodosToStorage(todos);
}

/**
 * Add to-do
 *
 * @param text
 */
function addTodoToLocalStorage(text) {
    var todos = getTodosFromStorage();

    todos.push({
        text: text,
        completed: false
    });

    saveTodosToStorage(todos);
}

/**
 * Complete/incomplete to-do
 * @param index
 */
function toggleTodo(index) {

}

/**
 * Handle remove to-do
 *
 * @param target
 */
function handleToggleTodo(target) {

    var todo = target;
    var id = todo.id;
    changeTodoFromStorage(id);
    render();
}


/**
 * Handle remove to-do
 *
 * @param target
 */
function handleRemoveTodo(target) {
    var todo = target.parentElement;
    var id = todo.id;

    removeTodoFromStorage(id);
    render();
}

/**
 * Handle on click to-do
 *
 * @param event
 */
function onClickTodo(event) {
    var target = event.target;

    var tag = target.tagName;

    if (tag === 'LI') {
        handleToggleTodo(target);
    }

    if (tag === 'SPAN') {
        handleRemoveTodo(target);
    }
}

function renderTodoToHTML(text, completed, i) {
    var todo = document.createElement('li');
    todo.innerHTML = text + '<span class="x">&#x2715;</span>';
    todo.id = i;

    if (completed) {
        todo.className = "completed";
    }
    todo.addEventListener('click', onClickTodo);

    list.appendChild(todo);
}



function getTodosFromStorage() {
    var str = localStorage.getItem('todos');

    //Check empty string.
    if (!str) {
        return [];
    }

    try {
        return JSON.parse(str);
    } catch (error) {
        return [];
    }
}

function saveTodosToStorage(todos) {
    var str = JSON.stringify(todos);
    return localStorage.setItem('todos', str);
}

function clearList() {
    list.innerHTML = '';
}

function renderTodosList() {
    var todos = getTodosFromStorage();

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        renderTodoToHTML(todo.text, todo.completed, i);
    }
}

function render() {
    clearList();
    renderTodosList();
}

function emptyInput() {
    input.value = '';
}

button.addEventListener ('click', function() {
    var text = input.value;
    if(text === ''){
        alert("write something, Please !");
    }
    else
    {
        addTodoToLocalStorage(text);
        render();
        emptyInput();

    }
    
});

/**
 * Initial
 */
render();