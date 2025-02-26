import TodoController from "./modul/todo/controller.js";

const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case "help":
    TodoController.help();
    break;
  case "list":
    TodoController.list();
    break;
  case "add":
    TodoController.add(arg);
    break;
  case "find":
    TodoController.find(arg);
    break;
  case "delete":
    TodoController.delete(arg);
    break;
  case "completed":
    TodoController.completed(arg);
    break;
  case "uncompleted":
    TodoController.uncompleted(arg);
    break;
  default:
    console.log("Perintah tidak dikenali! Gunakan 'node todo.js help'");
}
