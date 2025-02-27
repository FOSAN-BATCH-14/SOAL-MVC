import Todo from "./todoModel.js";
import View from "./todoView.js";

class TodoController {
  static help() {
    View.showHelp();
  }

  static list() {
    let todos = Todo.list();
    View.showList(todos);
  }

  static add(task) {
    let newTodo = Todo.add(task);
    View.showAddSuccess(newTodo);
  }

  static find(id) {
    let todo = Todo.find(id);
    if (todo) View.showFind(todo);
    else View.showError("Task tidak ditemukan!");
  }

  static delete(id) {
    let success = Todo.delete(id);
    if (success) View.showDeleteSuccess(id);
    else View.showError("Task tidak ditemukan!");
  }

  static completed(id) {
    let success = Todo.completed(id);
    if (success) View.showCompleted(id);
    else View.showError("Task tidak ditemukan!");
  }

  static uncompleted(id) {
    let success = Todo.uncompleted(id);
    if (success) View.showUncompleted(id);
    else View.showError("Task tidak ditemukan!");
  }
}

export default TodoController;