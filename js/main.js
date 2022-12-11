//Ejercicio #1
function NumeroMayor(Numeros) {
  let mayor = 0;
  for (let i = 0; i < Numeros.length; i++) {
    if (Numeros[i] > mayor) {
      mayor = Numeros[i];
    }
  }
  return mayor;
}

let Numeros = [3, 5, 7, 1, 6];
console.log(NumeroMayor(Numeros));

//Ejercicio #2
function NumeroMenor(Numeros) {
  let OrdenarNumeros =Numeros.sort();
  let menor = OrdenarNumeros;

  return menor[0];
}
Numeros = [-1, 3, 4, 2, 6];
console.log(NumeroMenor(Numeros));

//Ejercicio #3
function NumerosRepetidos(Numeros) {
  for (let i = 0; i < Numeros.length; i++) {
    if (Numeros[i]==Numeros[i+1]) {
      return `El número ${Numeros[i]} se encuentra más de una vez `;
    } else {
      console.log("No hay números repetidos")
    }
  }
  return arreglo;
}
Numeros = [7, 41, 5, 7, 10, 13, 2].sort();
console.log(Numeros);
console.log(NumerosRepetidos(Numeros));

//Ejercicio #4
const ArrayDesordenado = ar => ar.sort(() => Math.random()-0.5);

Numeros = [1, 2, 5, 14, 24, 31, 50, 105];
console.log("Numeros Ordenados: "+Numeros);
console.log("Numeros Desordenados: "+ArrayDesordenado(Numeros));


//Segunda Parte 
let btnCalcularEJ1 = document.getElementById("btnCalcularEJ1");
btnCalcularEJ1.addEventListener("click", function (event){
    event.preventDefault();
    let num1 = parseInt(document.getElementById("inputNum1").value);
    let num2 = parseInt(document.getElementById("inputNum2").value);
    let num3 = parseInt(document.getElementById("inputNum3").value);
    let Result = document.getElementById("displayej1");
    
    let Numeros = [num1,num2,num3];
    Result.innerHTML= NumeroMayor(Numeros);
});

let btnCalcularEJ2 = document.getElementById("btnCalcularEJ2");
btnCalcularEJ2.addEventListener("click", function (event) {
    event.preventDefault();
    let num1 = parseInt(document.getElementById("inputNum1").value);
    let num2 = parseInt(document.getElementById("inputNum2").value);
    let num3 = parseInt(document.getElementById("inputNum3").value);
    let Result = document.getElementById("displayej1");
    if ((num1 >= 0 && num1 <=100) && (num2 >= 0 && num2 <=100)&&  (num3 >= 0 && num3 <=100))
    {
        let Numeros = [num1,num2,num3];
        Result.innerHTML = NumeroMenor(Numeros);
    }else{
        console.log("Debes ingresar numeros entre el 1 y el 100");
    }
} );

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

  let btnCalcularEJ3 = document.getElementById("btnCalcularEJ3");
  btnCalcularEJ3.addEventListener("click", function(event){
    event.preventDefault();
    let resultado = document.getElementById("displayej1");
    resultado.innerHTML=parseInt(getRandom(0,100)) ;
 })
  

