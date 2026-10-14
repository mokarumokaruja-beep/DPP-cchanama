const ftList = document.getElementById("ft_list");
const newButton = document.getElementById("new");

function saveTodos() {
    const todos = [];
    const items = ftList.children;
    for (let i = 0; i < items.length; i++) {
        todos.push(items[i].textContent);
    }
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";
}

function addTodo(text) {
    const todo = document.createElement("div");
    todo.textContent = text;
    todo.addEventListener("click", function () {
        if (confirm("Do you want to remove this TO DO?")) {
            todo.remove();
            saveTodos();
        }
    });
    ftList.prepend(todo);
}

function loadTodos() {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].startsWith("todos=")) {
            const todos = JSON.parse(decodeURIComponent(cookies[i].substring(6)));
            for (let j = todos.length - 1; j >= 0; j--) {
                addTodo(todos[j]);
            }
        }
    }
}

newButton.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodo(text);
        saveTodos();
    }
});

loadTodos();