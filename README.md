# NodeJS-HAPI-AngularJS



Pembuatan aplikasi sederhana Create-Read-Update-Delete (CRUD) dengan menggunakan: 
 -  Front End AngularJS - Bootstrap
 -  Backend NodeJS framework HAPI-Js
 

# Installasi dan konfigurasi
Untuk menjalankan aplikasi ini dibutuhkan beberapa aplikasi tambahan diantaranya
  - NodeJS versi yang digunakan 10.13.0
  - Apache dan mysql bundle (xampp versi 7.1.11-0 )
  
 Memulai installasi 
 - Install bundle apache dan mysql, silahkan lanjutkan ke langkah berikutnya jika sudah terinstall apache dan mysql di pc.
 - Unduh semua file frontend - backend
 - Letakkan frontend di folder /htdocs jika menggunakan xampp atau /www jika menggunakan appserv, jika menggunakan webserver lainnya silahkan disesuaikan.  


selanjutnya jalankan perintah berikut pada command prompt untuk restore database:
```sh
mysql -u root -p
create database 'mahasiswa'
mahasiswa < backend/mahasiswa.sql
```

perintah berikut untuk memulai server NodeJS-HAPI:
```sh
cd C:xampp/htdocs/backend/
node index.js
"Server started  at : http://127.0.0.1:3000" 
```
setelah "server started", cek REST API pada endpoint berikut bisa menggunakan software POSTMAN atau software sejenis:
[![N|Solid](https://1.bp.blogspot.com/-0PDC57noYhM/W979tpt25YI/AAAAAAAAANU/XFRUzlsefdcFxtGN1q8yi3BvZheAVZbYgCK4BGAYYCw/s1600/table.png)](https://1.bp.blogspot.com/-0PDC57noYhM/W979tpt25YI/AAAAAAAAANU/XFRUzlsefdcFxtGN1q8yi3BvZheAVZbYgCK4BGAYYCw/s1600/table.png)


Jika tidak terdapat masalah pada API, langkah berikutnya adalah akses frontend dengan browser
```sh
http://localhost/frontend
atau
http://127.0.0.1/frontend
```
### Kontak

Angga Eldi Pratama 
website/homepage  : [https//:eldis.ooo](https//:eldis.ooo)
facebook : [Angga Eldi](https://web.facebook.com/angga.eldi.p)
Mail : [mail.anggaep@gmail.com](mail.anggaep@gmail.com)
