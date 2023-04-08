// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar

function num(n1){
    if(n1 % 2 == 0){
        console.log("El número es par")
    }else{
        console.log("El número es impar")
    }
}



//Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales


function numeros(a,b){
    if(a > b){
        console.log(a + " es mayor que " + b);
    }else if(b > a){
        console.log(b + " es mayor a " + a)
    }
    else{
        console.log("Los número son iguales")
    }
}



// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo(n2){
    if(n2 % 5 == 0){
        console.log("El número indicado es multiplo de 5")
    }
}



//Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número


function lista(n3){
    for(var i = 0; i <= n3; i++){
        console.log(i)
    }
}



// Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado  

function palabra(p,n4){
    for(var i=0; i < n4; i++){
        if(n4 * p){
            break;
        }
        console.log(p)
    }
}


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function array(n5){
    for(var i = 0; i < n5.length; i++){
        console.log(n5[i])
    }
}


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

 function array10(arr){
     for(var i = 0; i < arr.length; i++){
        if(i === 4){
            continue;
        }
         console.log(arr[i])
     }
 }



// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function array2(arr, n6){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i] *n6)
    }
}

