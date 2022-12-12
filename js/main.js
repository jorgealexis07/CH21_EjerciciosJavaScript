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
      return("No hay números repetidos")
    }
  }
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
        Result.innerHTML = "Debes ingresar numeros entre el 1 y el 100";
    }
} );

//Ejercicio #3 Adivinar un numero aleatorio.
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

  let btnCalcularEJ3 = document.getElementById("btnCalcularEJ3");
  btnCalcularEJ3.addEventListener("click", function(event){
    event.preventDefault();
    let resultado = document.getElementById("displayej1");
    resultado.innerHTML=parseInt(getRandom(0,100)) ;
 })
  
 //Ejercicio #4
 //Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
 function multiplo3(numero){
    if (numero >= 100 && numero <= 200) {
        if((numero % 3)==0){
            return `El numero ${numero} es multiplo de 3`
        }
        else{
            return "El numero que ingresaste no es multiplo de 3"
        }
    } else {
        return "El numero ingresado debe ser entre el 100 y el 200"
    }
 }

 let btnCalcularMultiplo = document.getElementById("btnCalcularMultiplo");
 btnCalcularMultiplo.addEventListener("click", function(event){
    event.preventDefault();
    let numEnt = parseInt(document.getElementById("inputNumEnt").value) ;
    let resultado = document.getElementById("displayej1");
    resultado.innerHTML = multiplo3(numEnt);
 });

 //5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
function suma2num(a,b,c) {
  if (a+b==c) {
    return `${c} es la suma de ${a} + ${b}`;
  } else if((a+c)==b) {
    return `${b} es la suma de ${a} + ${c}`;
  } else if ((b+c)==a) {
    return `${a} es la suma de ${b} + ${c}`;
  } else {
    return `Ningún numero es la suma de algun producto.`;
  }
}

let btnCalcularSuma2num = document.getElementById("btnCalcularSuma2num");
btnCalcularSuma2num.addEventListener("click", function (event) {
  event.preventDefault();
  let numA =parseInt(document.getElementById("inputNum1").value);
  let numB = parseInt(document.getElementById("inputNum2").value);
  let numC = parseInt(document.getElementById("inputNum3").value);
  let Resultado = document.getElementById("displayej1");

  Resultado.innerHTML= suma2num(numA,numB,numC);
});

//6. Elabora un algoritmo para leer un número y determinar si es par o impar
function parOimpar(numero) {
  if ((numero % 2) == 0) {
    return "El número que ingresaste es par";    
  }
  else{
    return "El número que ingresaste es impar";   
  }
}

let btnCalcularParOimpar = document.getElementById("btnCalcularParOimpar");
btnCalcularParOimpar.addEventListener("click", function(event) {
  event.preventDefault();
  let Numero = parseInt(document.getElementById("inputNumEnt").value) ;
  let Resultado = document.getElementById("displayej1");
  Resultado.innerHTML = parOimpar(Numero);
});