import fs from "fs";

class TodoModel {
  constructor(id, task, status = "x") {
    this.id = id;
    this.task = task;
    this.status = status; // 'x' = belum selesai, 'v' = selesai
    this.createdAt = new Date().toISOString();
  }

  static getTodos() {
    const data = fs.readFileSync("data.json", "utf8");
    return JSON.parse(data);
  }

  static saveTodos(todos) {
    fs.writeFileSync("data.json", JSON.stringify(todos, null, 2));
  }

  static list() {
    return this.getTodos();
  }

  static add(task) {
    const todos = this.getTodos();
    const id = todos.length + 1;
    todos.push(new TodoModel(id, task));
    this.saveTodos(todos);
    return `${task} ditambahkan ke dalam todo list`;
  }

  static find(id) {
    return (
      this.getTodos().find((todo) => todo.id == id) || "To-Do tidak ditemukan!"
    );
  }

  static delete(id) {
    let todos = this.getTodos();
    const index = todos.findIndex((todo) => todo.id == id);
    if (index === -1) return "To-Do tidak ditemukan!";
    const deleted = todos.splice(index, 1);
    this.saveTodos(todos);
    return `${deleted[0].task} dihapus dari todo list`;
  }

  static completed(id) {
    let todos = this.getTodos();
    const todo = todos.find((t) => t.id == id);
    if (!todo) return "To-Do tidak ditemukan!";
    todo.status = "v";
    this.saveTodos(todos);
    return `To-Do ${todo.task} ditandai sebagai selesai`;
  }

  static uncompleted(id) {
    let todos = this.getTodos();
    const todo = todos.find((t) => t.id == id);
    if (!todo) return "To-Do tidak ditemukan!";
    todo.status = "x";
    this.saveTodos(todos);
    return `To-Do ${todo.task} ditandai sebagai belum selesai`;
  }
}
export default TodoModel;
