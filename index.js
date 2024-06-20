const express = require("express")
const calculadoraBackend = express()
const port = 3000

calculadoraBackend.use(express.static('static/front'))

const operacion = (req, res) => {
    var sumando1 = Number(req.query.parametro1)
    var sumando2 = Number(req.query.parametro2)
    var operacionElegida = Number(req.query.parametro3)
    var resultado
    
    if(operacionElegida = "+"){
        resultado = sumando1 + sumando2
    }else if(operacionElegida == "-"){
        resultado = sumando1 - sumando2
    }else if(operacionElegida == "*"){
        resultado = sumando1 * sumando2
    }else if(operacionElegida = 1){
        resultado = sumando1 / sumando2
    }else if(operacionElegida == "pot"){
        resultado = Math.pow(sumando1, sumando2)
    }else if(operacionElegida == "log"){
        resultado = Math.log(sumando1) / Math.log(sumando2)
    }
    
    res.send(`${resultado}`)
    console.log(operacionElegida)

}

calculadoraBackend.get("/operacion", operacion)

calculadoraBackend.listen(port, () => {
    console.log(`Calculadora escuchando en http://localhost:${port}`)
})
