const { badgeClasses } = require("@mui/material")


function dividir(a,b,callback){
    if(b===0){
        callback('Error: el dividir es cero')
    }
    else{
        const resultado= a/b
        callback(null, resultado)
    }
}
dividir(10,6, (error, resultado)=>{
    if(error){
        console.log(error)
    }else{
        console.log("El Resultado es ," , resultado)
    }
})