class View {
  static showHelp() {
    console.log(`
    COMMANDS:
    $ node todo.js help          # Menampilkan bantuan
    $ node todo.js list          # Melihat daftar TODO
    $ node todo.js add <task>    # Menambahkan TODO
    $ node todo.js find <id>     # Melihat detail TODO
    $ node todo.js delete <id>   # Menghapus TODO
    $ node todo.js completed <id> # Menandai TODO selesai
    $ node todo.js uncompleted <id> # Menandai TODO belum selesai
    `);
  }

  static showList(todos) {
    console.log("\n To Do List:");
    todos.forEach(todo => {
      console.log(`${todo.id}. ${todo.task} [${todo.status}] --> mulai: ${todo.createdAt}, selesai: ${todo.completedAt}`);
    });
  }

  static showAddSuccess(todo) {
    console.log(`\"${todo.task}\" berhasil ditambahkan ke dalam To Do List!`);
  }

  static showFind(todo) {
    console.log(`Task ditemukan: ${todo.id}. ${todo.task} [${todo.status}] --> mulai: ${todo.createdAt}, selesai: ${todo.completedAt}`);
  }

  static showDeleteSuccess(id) {
    console.log(`Task dengan ID ${id} berhasil dihapus.`);
  }

  static showCompleted(id) {
    console.log(`Task dengan ID ${id} telah diselesaikan.`);
  }

  static showUncompleted(id) {
    console.log(`Task dengan ID ${id} telah dikembalikan menjadi belum selesai.`);
  }

  static showError(message) {
    console.log(`Error: ${message}`);
  }
}

export default View;