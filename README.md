# ExpressJS-JavascriptMastery

This tutorial from Javascript Mastery the title is Build a REST API with NodeJS and Express | CRUD API Tutorial<br/>
Link tutorial -> [https://www.youtube.com/watch?v=l8WPWK9mS5M&t=244s](https://www.youtube.com/watch?v=l8WPWK9mS5M&t=244s)

1. NPM Initialize `$ npm init -y`
2. Install ExpressJS `$ npm install --save express`
3. Create server file `index.js`
4. How to run `$ node index.js`
5. Install nodemon `$ npm install --save-dev nodemon`
6. Config nodemon
7. Setup GET in postman

- test `http://localhost:5000/users`

8. CREATE, post data

- Open postman
- Pastikan pada POST request
- Setup postman sebagai POST method
- Masukkan `http://localhost:5000/users`
- Pilih `Body`, setelah itu kemudian pilih `raw`
- Ganti mode `text` jadi `JSON (application/json)`
- Masukkan di raw tersebut

```
{
	"firstName": "Ali",
	"lastName": "Mm",
	"age": 12
}
```

- Click `Send`
- Cek Hasilnya di `Body` > `Pretty` bagian bawah postman
- Cek Hasilnya pakai GET request, coba lagi step no 7

9. Install UUID `$ npm install uuid`
10. GET by Id

- Test `http://localhost:5000/users/7d166988-0f07-46e2-9a6a-4379d5d23385` <br/>
  id di atas bisa diganti2, tergantung id yg tergenerate
