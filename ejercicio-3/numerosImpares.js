function numerosImparesHastaN(numero) {
  if (Number.isInteger(numero) && numero > 0) {
    let impares = [];
    for (let i = 1; i <= numero; i += 2) {
      impares.push(i);
    }
    return impares;
  } else {
    console.log("Por favor, ingresa un número entero positivo.");
  }
}

let resultado = numerosImparesHastaN(9);
console.log(resultado); 
