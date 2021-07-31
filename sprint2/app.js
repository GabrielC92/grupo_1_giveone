const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/producto', (req,res) => res.sendFile(path.join(__dirname,'views','productDetail.html')));
app.get('/cart', (req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')));
app.get('/formasDePago', (req,res) => res.sendFile(path.join(__dirname,'views','formaDePago.html')));
app.get('/compra', (req,res) => res.sendFile(path.join(__dirname,'views','compra.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/registro', (req,res) => res.sendFile(path.join(__dirname,'views','register.html')));
app.get('/forgot', (req,res) => res.sendFile(path.join(__dirname,'views','forgot.html')));
app.get('/forgot2', (req,res) => res.sendFile(path.join(__dirname,'views','forgot2.html')));

app.listen(port, () => console.log(`Server running in http://localhost:${port}`));


