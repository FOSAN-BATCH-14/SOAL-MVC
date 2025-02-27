import fs from "fs";

class Todo {
  constructor(id, task, status = "x", createdAt, completedAt = null) {
    this.id = id;
    this.task = task;
    this.status = status; // "x" = belum selesai, "v" = selesai
    this.createdAt = createdAt || new Date().toISOString();
    this.completedAt = completedAt;
  }

  static getTodos() {
    try {
      let data = fs.readFileSync("todoData.json", "utf-8");
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }

  static saveTodos(todos) {
    fs.writeFileSync("todoData.json", JSON.stringify(todos, null, 2));
  }

  static list() {
    return this.getTodos();
  }

  static add(task) {
    let todos = this.getTodos();
    let newTodo = new Todo(todos.length + 1, task, "x", new Date().toISOString());
    todos.push(newTodo);
    this.saveTodos(todos);
    return newTodo;
  }

  static find(id) {
    let todos = this.getTodos();
    return todos.find(todo => todo.id == id);
  }

  static delete(id) {
    let todos = this.getTodos();
    let newTodos = todos.filter(todo => todo.id != id);
    this.saveTodos(newTodos);
    return newTodos.length < todos.length;
  }

  static completed(id) {
    let todos = this.getTodos();
    let todo = todos.find(todo => todo.id == id);
    if (todo) {
      todo.status = "v";
      todo.completedAt = new Date().toISOString();
      this.saveTodos(todos);
      return true;
    }
    return false;
  }

  static uncompleted(id) {
    let todos = this.getTodos();
    let todo = todos.find(todo => todo.id == id);
    if (todo) {
      todo.status = "x";
      todo.completedAt = null;
      this.saveTodos(todos);
      return true;
    }
    return false;
  }
}

export default Todo;