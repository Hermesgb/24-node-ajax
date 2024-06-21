const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/html'))
calculadoraBackend.use(express.static('static/js'))

calculadoraBackend.get("/hola", (req, res) =>{
    res.send("Hola Calculadora")
})

const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`${resultado}`)
}

const resta = (req, res) => {
    res.send(`${Number(req.query.parametro1) - Number(req.query.parametro2)}`)
}

calculadoraBackend.get("/suma", suma)
calculadoraBackend.get("/resta", resta)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
