// Ejercicio 6

function paso1(){
    return new Promise((resolve)=> {
    setTimeout(() => {
        resolve(5)
        console.log("Paso 1 funcionando")
    }, 3000);
    })
}


function paso2(num){
    return new Promise((resolve)=> {
    setTimeout(() => {
        resolve(num * 2)
        console.log("Paso 2 funcionando")
    }, 3000);
    })
}




function paso3(num){
    return new Promise((resolve)=> {
    setTimeout(() => {
        resolve(num + 2)
        console.log("Paso 3 funcionando")
    }, 3000);
    })
}

paso1()
.then(paso2)
.then(paso3)
.then((resultado)=> {console.log("resultado final es: ", resultado)})