function operacion(operando) {
    // Obtener valores de los inputs
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;

    // Construir la URL para la solicitud al backend
    const url = `http://localhost:3000/${operando}?parametro1=${input1}&parametro2=${input2}`;

    // Realizar la solicitud al backend
    fetch(url)
        .then(response => response.text())
        .then(data => {
            // Poner el resultado en el campo de output
            document.getElementById('output').value = data;
        })
        .catch(error => console.error('Error al realizar la solicitud:', error));
}
