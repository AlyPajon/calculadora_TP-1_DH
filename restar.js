let process = require('process')

function restar() {
    
    if (process.argv[2] === "restar"){
        
        let N1 = process.argv[3]

        let N2 = process.argv[4]

        if (N1 == undefined && N2 == undefined){
        
            return "ERROR, porfavor ingrese dos numeros"
    
        }else if(N1 == undefined ){
            
            N1 = 0

        }else if (N2 == undefined){

            N2 = 0

        }

        return +N1 - +N2

    }
}

module.exports = restar;