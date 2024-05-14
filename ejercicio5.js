// Ejercicio 5

function operacionAsicrona(callback){
    setTimeout(() => {
        callback('operacion asicrona completada')
    }, 6000);
}

operacionAsicrona((mensaje)=>{
console.log(mensaje)
})