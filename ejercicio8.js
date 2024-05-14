// Ejercicio 8

function dividir(a,b){
    return new Promise(()=>{
    if(b===0){
        reject('Error: el dividir es cero')
    }
    else{
        const resultado= a/b
    }
})
}
dividir(10,6).then((resultado)=>{
        console.log(error)
    }).catch((error)=>{
        console.log(error)
})