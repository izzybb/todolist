// Create todoList Objecy
var todoList = {
  //create array to save data
  todos: [],

  // Show dodo list
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },

  //Add todo
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  //Update todo
  changeTodo: function(position, todoText) {
    this.todos[position] = todoText;
    this.displayTodos();
  },

  //Delete todo
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  //Toggle complete
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

};