// Ejercicio 4

function retrasarPromesa(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`La Promesa se ha resuelto en ${ms} segundos`)
        })
    })
}

retrasoPromesa(3000).then((mensaje) => {
    console.log(mensaje);
  });