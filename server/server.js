require('./config/config')

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/usuario', (req, res)=> {
    res.json('get Usuario');
})

app.post('/usuario', (req, res) => {
    res.json(req.body)
})

app.put('/usuario/:id', (req, res) => {
    res.json('put Usuario ' + req.params.id)
})

app.delete('/usuario/:id', (req, res) => {
    res.json('delete Usuario ' + req.params.id)
})

app.listen(process.env.PORT, console.log(`Escuchando en el puerto ${process.env.PORT}`))