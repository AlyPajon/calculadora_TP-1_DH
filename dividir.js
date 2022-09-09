let process = require('process')

function dividir() {

    let N1 = process.argv[3]

    let N2 = process.argv[4]

    if (N1 == undefined && N2 == undefined) {
        
        return "ERROR, porfavor ingrese dos numeros"

    }else if(N1 == undefined ){
            
        return N2
        
    }else if (N2 == undefined){

        return N1

    }

    if (+N1 == 0 || +N2 == 0){

        return " ERROR no se puede dividir por cero, reintente porfavor"

    } else if (process.argv[2] === "dividir") {

        return +N1 / +N2

    } 
}

module.exports = dividir