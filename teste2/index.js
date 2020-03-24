const express = require('express')
const mosca = require('mosca')
const app = express();

const settings = {port:1234}
const port = 3030;
const broker = require('./controller')
var publish = require('./published')

broker(mosca, settings)//inicia o Broker

app.get('/:id', (req,res)=>{
    var id = req.params.id
    res.send(id)
    publish(id)
})

app.listen(port, ()=>{
    console.log("servidor rodando")
})
