$(document).ready(function () {
    const ftList = $("#ft_list");

    function saveTodos() {
        const todos = [];
        ftList.children().each(function () {
            todos.push($(this).text());
        });
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";
    }

    function addTodo(text) {
        const todo = $("<div></div>").text(text);
        todo.on("click", function () {
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

    $("#new").on("click", function () {
        const text = prompt("Enter a new TO DO:");
        if (text !== null && text.trim() !== "") {
            addTodo(text);
            saveTodos();
        }
    });

    loadTodos();
});