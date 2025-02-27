import TodoController from "./modul/todo/todoController.js";

const command = process.argv[2];
const param = process.argv[3];

switch (command) {
  case "help":
    TodoController.help();
    break;
  case "list":
    TodoController.list();
    break;
  case "add":
    TodoController.add(param);
    break;
  case "find":
    TodoController.find(param);
    break;
  case "delete":
    TodoController.delete(param);
    break;
  case "completed":
    TodoController.completed(param);
    break;
  case "uncompleted":
    TodoController.uncompleted(param);
    break;
  default:
    console.log("Command tidak ditemukan. Gunakan `node todo.js help` untuk melihat daftar command.");
}