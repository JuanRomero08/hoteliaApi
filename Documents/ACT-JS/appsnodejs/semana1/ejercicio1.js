/*const num1=6, num2=10
let suma = num1 + num2
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/



const sumar=(num1, num2)=>{
    let suma = num1 + num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);
}


//Funcion restar
const restar=(num1, num2)=>{
    let resta = num1 - num2
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`);
}


//Funcion multiplicar
const multiplicar=(num1, num2)=>{
    let multi = num1 * num2
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multi}`);
}


//Funcion division
const division=(num1, num2)=>{
    let divi = num1 / num2
    console.log(`La division entre ${num1} y ${num2} es ${divi}`);
}

//Funcion potenciar
const potencia=(num1, num2)=>{
    let pote = Math.pow(num1, num2)
    console.log(`La potencia entre ${num1} y ${num2} es ${pote}`);
}


//Funcion radicar
const radicacion=(num1, num2)=>{
    let radi= Math.sqrt(num1, num2)
    console.log(`La radicacion entre ${num1} y ${num2} es ${radi}`);
}


const operaciones={}
operaciones.suma=sumar;
operaciones.resta=restar;
operaciones.multi=multiplicar;
operaciones.divi=division;
operaciones.pote=potencia;
operaciones.radi=radicacion;

module.exports=operaciones

exports.suma=sumar
exports.resta=restar
exports.multi=multiplicar
exports.divi=division
exports.pote=potencia
exports.radi=radicacion