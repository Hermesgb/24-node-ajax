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

const multiplica = (req, res) => {
    res.send(`${Number(req.query.parametro1) * Number(req.query.parametro2)}`)
}

const divide = (req, res) => {
    res.send(`${Number(req.query.parametro1) / Number(req.query.parametro2)}`)
}

const potencia = (req, res) => {
    res.send(`${Number(req.query.parametro1) ** Number(req.query.parametro2)}`)
    // res.send(`${Math.pow(Number(req.query.parametro1), Number(req.query.parametro2))}`)
}

const log = (req, res) => {
    res.send(`${Math.log(Number(req.query.parametro1), Number(req.query.parametro2))}`)

}

const ecuacion = (req, res) => {
    res.send(400)
}

calculadoraBackend.get("/suma", suma)
calculadoraBackend.get("/resta", resta)
calculadoraBackend.get("/multiplica", multiplica)
calculadoraBackend.get("/divide", divide)
calculadoraBackend.get("/potencia", potencia)
calculadoraBackend.get("/log", log)
calculadoraBackend.get("/ecuacion", ecuacion)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
