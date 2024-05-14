// Ejercicio 1

function saludar(nombre, callback){
    const saludo = `hola, ${nombre}`
    callback(saludo)
}
function mostrar(saludo){
    console.log(saludo)
}

saludar('William', mostrar)