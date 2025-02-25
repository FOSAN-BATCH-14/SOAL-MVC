# SOAL-MVC
# To Do List

## Learning Competencies

- OOP
- MVC
- Callback

## Summary

Challenge kali ini akan membuat sebuah interface untuk membuat sebuah To Do list

Tujuan utama dari tantangan ini adalah untuk eksplorasi desain berorientasi objek. Kita akan membuat beberapa class dan memiliki method masing-masing. Setelah itu buat lah sebuah sebuah arsitektur model view controller untuk program ini.

## LEVELS

### Level 0 : Buat Input dan Output

buatlah sebuah file yang bernama todo.js yang berfungsi sebagai input untuk menjalankan program to do list anda. pada file tersebut gunakan method **process argv** untuk mengakses sebuah method yang anda buat.gunakan switch command untuk membuat process tersebut. User menjalankan perintah di terminal seperti dibawah ini.

```javascript
$ node todo.js help # menampilkan command apa saja yang tersedia
$ node todo.js list # Melihat daftar TODO
$ node todo.js add <task_content> # Menambahkan TODO ke dalam list
$ node todo.js find <task_id> # Melihat detail TODO sesuai 'task_id' nya
$ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya
$ node todo.js completed <task_id> # Menandai status TODO selesai
$ node todo.js uncompleted <task_id> # Menandai status TODO belum selesai
```

task_id : berfungsi sebagai unik id untuk membedakan tiap todo 

task_content: berfungsi sebagai inputan todo yang ingin dibuat

### Level 1 : Method To Do List

1. Pada Model buatlah sebuah file bernama model yang berisikan sebuah class model. class ini mempunyai constructor id, task, status.
2. Buatlah beberapa static class yang mempunyai fungsi masing - masing yaitu : 
   1. list : berfungsi untuk menampilkan list todo yang ada di file todo.json
   2. add: berfungsi untuk menambahkan todo yang terbaru pada file todo.json
   3. find: berfungsi untuk mencari sebuah todo pada to do list berdasarkan id to do
   4. delete: berfungsi untuk menghilangkan sebuah todo pada to do list 
   5. completed: berfungsi untuk merubah status to do menjadi completed
   6. uncompleted: berfungsi untuk merubah status to do menjadi uncompleted

### Level 2 : Architecture Program To Do list

Buatlah sebuah file controller dan view untuk program anda. fungsi dari file controller ini berfungsi sebagai penjembatan antara model anda dengan view. Dan view anda berfungsi untuk menampilkan output program anda. 

buatlah sebuah case - case yang sesuai di bawah ini :

- command 'help'

  buatlah sebuah controller yang akan nantinya menampilkan sebuah list command yang ada di program to do list, contoh tampilan ada dibawah

  ```
  $ node todo.js help # menampilkan command apa saja yang tersedia
  $ node todo.js list # Melihat daftar TODO
  $ node todo.js add <task_content> # Menambahkan TODO ke dalam list
  $ node todo.js find <task_id> # Melihat detail TODO sesuai 'task_id' nya
  $ node todo.js delete <task_id> # Menghapus TODO sesuai 'task_id' nya
  $ node todo.js completed <task_id> # Menandai status TODO selesai
  $ node todo.js uncompleted <task_id> # Menandai status TODO belum selesai
  ```

  

- command ' list'

  buatlah sebuah controller  yang nantinya akan menampilkan list yang ada di program to do list anda.

  apabila menjalankan perintah 

  ```
  node todo.js list 
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [x]
  2. main game [v]
  3. nonton korea [x]
  ```

  angka tersebut merupakan id dari todo, dan yang disampingnya merupakan content task dan simbol x atau v merupakan status telah dikerjakan atau belum

  

- command 'add'  <task_content>

  buatlah sebuah controller  yang nantinya akan menambahkan todo yang ada di program to do list anda. apabila menjalankan perintah 

  ```
  node todo.js add tidur
  ```

  maka akan menampilkan ouputseperti dibawah ini: 

  ```
  tidur ditambahkan kedalam todo list
  ```

  

- command 'find' <task_id>

  buatlah sebuah controller  yang nantinya akan mencari todo yang ada di program to do list anda. dengan referensi id pada to do list. apabila menjalankan perintah 

  ```
  node todo.js find 1 
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [x]
  ```

  angka tersebut merupakan id dari todo, dan yang disampingnya merupakan content task dan simbol x atau v merupakan status telah dikerjakan atau belum

  

- case 'delete' <task_id>

  buatlah sebuah controller  yang nantinya akan menghilangkan todo yang ada di program to do list anda. dengan referensi id pada to do list. apabila menjalankan perintah 

  ```
  node todo.js delete 3 
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  nonton korea di hilangkan di dalam todo list
  ```

  

- case 'completed' <task_id>

  buatlah sebuah controller  yang nantinya akan merubah status todo yang ada di program to do list anda. dengan referensi id pada to do list dari uncompleted menjadi completed. apabila menjalankan perintah 

  ```
  node todo.js list 
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [x]
  2. main game [v]
  3. nonton korea [x]
  ```

  apabila menjalankan perintah 

  ```
  node todo.js completed 1
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [v]
  2. main game [v]
  3. nonton korea [x]
  ```

  status tersebut berubah dari tanda x menjadi v apabila sudah terlaksana

  

- case 'uncompleted' <task_id>

  buatlah sebuah controller  yang nantinya akan merubah status todo yang ada di program to do list anda. dengan referensi id pada to do list dari uncompleted menjadi completed. apabila menjalankan perintah 

  ```
  node todo.js list 
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [v]
  2. main game [v]
  3. nonton korea [x]
  ```

  apabila menjalankan perintah 

  ```
  node todo.js uncompleted 2
  ```

  maka akan menampilkan list todo seperti dibawah ini: 

  ```
  1. berenang [v]
  2. main game [x]
  3. nonton korea [x]
  ```

  status tersebut berubah dari tanda v menjadi x apabila belum terlaksana

  

### Level 3 : Upsize Your Program

Tambahkan beberapa fitur terserah anda sesuai yang dinginkan seperti menambah kan property tanggal, tag, atau apapun. Lalu tambahkan beberapa static method yang diinginkan yang sesuai anda inginkan seperti add tag, ataupun mengurutkan data dari terbesar ke terkecil dan kebalikan nya  pada command list.
