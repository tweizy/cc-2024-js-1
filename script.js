let todos = [];

const form = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");
const search = document.getElementById("search");
const deleteIcons = document.querySelectorAll('.delete');


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = document.getElementById("todo").value.trim();
    if (todo !== ''){
        todos.push(todo);
        updateTodos(todo);
    }
    form.reset();
})

function updateTodos(content) {
    let todo = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${content}</span>
    <i class="far fa-trash-alt delete"></i> </li>`;
    todoList.insertAdjacentHTML('beforeend', todo);

    attachDeleteEventListeners();
}

search.addEventListener("input", (e) => {
    searchValue = e.target.value.trim().toLowerCase();
    const filteredTodos = todos.filter( (todo) => todo.toLowerCase().includes(searchValue) );
    renderTodos(filteredTodos);
});

function renderTodos(content) {
    todoList.innerHTML = "";
    content.forEach(todo => {
        let todoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i> </li>`;
        todoList.insertAdjacentHTML('beforeend', todoItem);
    });

    attachDeleteEventListeners();
}

function deleteTodo(item) {
    todos = todos.filter(todo => todo !== item);
    renderTodos(todos);
}

function attachDeleteEventListeners() {
    const deleteIcons = document.querySelectorAll('.delete');
    deleteIcons.forEach(icon => {
        icon.addEventListener("click", (e) => {
            const todo = e.target.previousElementSibling.textContent;
            deleteTodo(todo);
        });
    });
}