// const fs = require('fs');;
// const http = require('http');


// // fs.writeFileSync('./test.txt', "file uusgeh modul");

// console.log(http);
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);



// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('Home page')
//     } else if (req.url === "/contact") {
//         res.end("contac");
//     } else res.end('404 page not found')
// })

// server.listen(3000, () => {
//     console.log('3000 portiig sonsoj baina')
// });

const express = require('express');
// const path = require('path');
const app = express();
const mainRouter = require('./router/mainRouter');


app.use(mainRouter);



// app.use('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, './', 'views', 'about.html'));
// })

// app.use('/', (req, res) => {
//     // res.write(`<h1>Home</h1>`);
//     // res.write(`<p>dsadsadas</p>`);

//     res.sendFile(path.join(__dirname, './', 'views', 'home.html'));
// });

app.listen(3000);

