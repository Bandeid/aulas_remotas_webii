const express = require('express')
const app = express()
const alunos = require('./alunos.json')
const centralizador = require('./rotas/centralizador')
app.get('/',(req,res) =>{
    res.send('questao 1') 
    })

app.listen(3000,()=>{
        console.log(' servidor na porta 3000')
    })


    app.get('/alunos/todos',(req,res) =>{
        let alunos = [
            {"nome": "joao", "turma": "sala 1" },
            {"nome": "pedro", "turma": "sala 1"},
            {"nome": "mario", "turma": "sala 1"},
            {"nome": "luigi", "turma": "sala 1"}
        ]

        res.json(alunos) 
    })


    app.get('/moeda/:valor_real', centralizador.converter)