let sumar = require ('./sumar')

let restar = require ('./restar')

let multiplicar = require ('./multiplicar')

let dividir = require ('./dividir')



function calculadora() {
    
    if (process.argv[2] === "sumar") {
        
        return (`el restultado de la suma es: ${sumar()}`)

    }else if (process.argv[2] === "restar"){
        
        return (`el restultado de la resta es: ${restar()}`)

    }else if (process.argv[2] === "multiplicar"){
        
        return (`el restultado de la multiplicacion es: ${multiplicar()}`)

    }else if (process.argv[2] === "dividir"){
        
        return (`el restultado de la divicion es: ${dividir()}`)

    }

    return "ERROR algun dato no fue ingresado correctamente, reintente porfavor"

}

console.log(calculadora());