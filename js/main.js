//Ejercicio #1
function NumeroMayor(Numeros){
    let mayor=0;
    for (let i = 0; i < Numeros.length; i++) {
        if (Numeros[i] > mayor) {
            mayor = Numeros[i];
        }
    }
    return mayor;
}
let Numeros=[3, 5, 7, 1, 6];
console.log(NumeroMayor(Numeros)); 

//Ejercicio #2
function NumeroMenor(Numeros){
    let menor=0;
    for (let i = 0; i < Numeros.length; i++) {
        if (Numeros[i] <  menor) {
            menor = Numeros[i];
        }
    }
    return menor;
}
Numeros=[-1, 3, 4, 2, 6];
console.log(NumeroMenor(Numeros)); 