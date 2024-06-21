const express = require("express")
const calculadoraBackend = express()
const port = 3000

// registramos el contenido estatico: asi se sirven los ficheros al navegador
calculadoraBackend.use(express.static('static/html'))
calculadoraBackend.use(express.static('static/js'))

// Accion y enrutado separado para que se vea como se conecta el endpoint suma con su accion
const suma = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var resultado = sumando1 + sumando2
    
    res.send(`${resultado}`)
}

calculadoraBackend.get("/suma", suma)

// Resto de acciones más compactadas:
calculadoraBackend.get("/resta", (req, res) => {
    res.send(`${Number(req.query.parametro1) - Number(req.query.parametro2)}`)
})

calculadoraBackend.get("/multiplica", (req, res) => {
    res.send(`${Number(req.query.parametro1) * Number(req.query.parametro2)}`)
})

calculadoraBackend.get("/divide", (req, res) => {
    res.send(`${Number(req.query.parametro1) / Number(req.query.parametro2)}`)
})

calculadoraBackend.get("/potencia", (req, res) => {
    res.send(`${Number(req.query.parametro1) ** Number(req.query.parametro2)}`)
})

calculadoraBackend.get("/log", log = (req, res) => {
    res.send(`${Math.log(Number(req.query.parametro1), Number(req.query.parametro2))}`)
})

calculadoraBackend.get("/ecuacion", ecuacion = (req, res) => {
    res.send(400)
})

// Escuchamos, si no escuchamos el servidor no responde
calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
