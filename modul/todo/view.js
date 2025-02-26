class TodoView {
  static displayList(todos) {
    todos.forEach((todo) => {
      console.log(
        `id: ${todo.id}. task: ${todo.task} status: [${todo.status}] date: ${todo.createdAt}`
      );
    });
  }

  static displayMessage(message) {
    console.log(message);
  }

  static displayFind(todo) {
    if (typeof todo === "string") {
      console.log(todo);
    } else {
      console.log(
        `id: ${todo.id}. task: ${todo.task} status: [${todo.status}] date: ${todo.createdAt}`
      );
    }
  }

  static displayHelp() {
    console.log(`
    Perintah yang tersedia:
    $ node todo.js help              # Menampilkan daftar perintah
    $ node todo.js list              # Melihat daftar TODO
    $ node todo.js add <task>        # Menambahkan TODO
    $ node todo.js find <id>         # Mencari TODO berdasarkan id
    $ node todo.js delete <id>       # Menghapus TODO berdasarkan id
    $ node todo.js completed <id>    # Menandai TODO selesai
    $ node todo.js uncompleted <id>  # Menandai TODO belum selesai
    `);
  }
}

export default TodoView;
