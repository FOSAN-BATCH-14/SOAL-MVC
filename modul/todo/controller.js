import Todo from "./model.js";
import TodoView from "./view.js";

class TodoController {
  static list() {
    const todos = Todo.list();
    TodoView.displayList(todos);
  }

  static add(task) {
    const message = Todo.add(task);
    TodoView.displayMessage(message);
  }

  static find(id) {
    const todo = Todo.find(id);
    TodoView.displayFind(todo);
  }

  static delete(id) {
    const message = Todo.delete(id);
    TodoView.displayMessage(message);
  }

  static completed(id) {
    const message = Todo.completed(id);
    TodoView.displayMessage(message);
  }

  static uncompleted(id) {
    const message = Todo.uncompleted(id);
    TodoView.displayMessage(message);
  }

  static help() {
    TodoView.displayHelp();
  }
}

export default TodoController;
