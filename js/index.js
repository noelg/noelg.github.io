(function($){
    function getTodos()
    {
        try {
            var todos = JSON.parse(localStorage.getItem('todos')) || [];
        } catch (e) {
            todos=[];
        }

        return todos;
    }

    function addTodo(item) {
        todos = getTodos();
        todos.push(item);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    $('#todoform').submit(function() {
        var todo = $('#item').val(),
            li = `<li class="list-group-item">${todo}</li>`;

        
        addTodo(todo);
        $('#list').prepend(li);
        $('#item').val('');
        return false;
    });

    for (var todos = getTodos(), i =0; i<todos.length;i++) {
        console.log(todos[i]);
        $('#list').prepend(`<li class="list-group-item">${todos[i]}</li>`);
    }
}(jQuery));