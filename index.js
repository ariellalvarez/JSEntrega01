console.log("Bienvenido a la calculadora de cuotas")

let continuar = true
do {
var cantidad = parseInt(prompt("Escriba la cantidad de cuotas"))
console.log("Cantidad de cuotas elegidas: "+ cantidad)
const validacionC = prompt("¿Es la cantidad de cuotas correcta? (si/no)").toLowerCase()
console.log(validacionC)
if (validacionC == "si"){
    continuar = false

}

} while (continuar)

let continuar2 = true

do {
var monto = parseInt(prompt("Escriba el monto de la compra"))
console.log("Monto de la compra: "+ monto)
const validacionM = prompt("¿Es el monto correcto? (si/no)").toLowerCase()
console.log(validacionM)
if (validacionM == "si"){
    continuar2 = false

}

} while (continuar2)



const interes = parseInt(prompt("Escriba el porcentaje de interes (sin el simbolo % y 0 si es sin interes"))
if (interes == 0){
    console.log("Sin Interes")
} else {
    console.log("Interes: "+ interes + "%")
}


cuota = (monto / cantidad ) * (1+(interes/100))


console.log("Son "+ cantidad + " cuotas de " + cuota + " pesos")

function detalleCuota(a,b){
 console.log("Cuota #"+a+" de "+"pesos "+b)
}

for(let i=1; i<=cantidad; i++ ){
detalleCuota(i,cuota)
}

console.log("Suerte con la compra!!!")
