
let process = require('process')

function sumar() {
    
    if (process.argv[2] === "sumar"){
        
        var N1 = process.argv[3]

        var N2 = process.argv[4]

        if (N1 == undefined && N2 == undefined){
        
            return "ERROR, porfavor ingrese dos numeros"
    
        }else if(N1 == undefined ){
            
            N1 = 0

        }else if (N2 == undefined){

            N2 = 0

        }

        return +N1 + +N2
    }
}

module.exports = sumar;

