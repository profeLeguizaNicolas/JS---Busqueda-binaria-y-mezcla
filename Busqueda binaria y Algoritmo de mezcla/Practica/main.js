//Ejercicio 1

function busquedaLineal(arr, objetivo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === objetivo) return i;
  }
  return -1;
}


function busquedaBinaria(arr, objetivo) {
  let izquierda = 0;
  let derecha = arr.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (arr[medio] === objetivo) return medio;
    if (arr[medio] < objetivo) izquierda = medio + 1;
    else derecha = medio - 1;
  }
  return -1;
}

let tamano = 1000000;
let arreglo = [];
for (let i = 0; i < tamano; i++) {
  arreglo[i] = i;
}

let objetivo = tamano - 1;

console.time("Búsqueda Lineal");
busquedaLineal(arreglo, objetivo);
console.timeEnd("Búsqueda Lineal");


console.time("Búsqueda Binaria");
busquedaBinaria(arreglo, objetivo);
console.timeEnd("Búsqueda Binaria");

/*
//Ejercicio 2
let arr = [];
let aux = 0;
for(let i = 0 ; i < 19 ; i++)
  {
    arr[i] = Math.floor(Math.random()*100)+1; 
  }
  console.log(arr);

  for( let i = 0 ; i < arr.length -1 ; i++)
  {
    for(let j = 0 ; j < arr.length -1 ; j++)
    {
      if(arr[j] > arr[j+1])
      {
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }

  }
    console.log(arr)

function busqueda(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
 
    if (arr[medio] === objetivo) {
      return medio; // Devuelve el índice
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return "No se encontro"; // No encontrado
}
   
console.log(busqueda(arr,9));
*/
//Ejercicio 3
/*
let aux= 0;
let arr = [];
for(let i =0; i < 19 ; i++)
  {
    arr[i] = Math.floor(Math.random()*100)+1;
  }
  for(let i = 0 ; i < arr.length-1; i++)
  {
    for(let j = 0; j < arr.length-1;j++)
    {
      if(arr[j] > arr[j+1])
      {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = aux;
      }
    }
  }

  console.log(arr);

  for(let i = arr.length-1 ; i > 0 ; i--)
    {
      let j = Math.floor(Math.random()*(i+1));

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log(arr);

*/
//Ejercicio 4


let maso = [];
let index = 0;
let palos = ["copa", "oro", "palo", "espada"];

for (let p = 0; p < palos.length; p++) {
  for (let i = 1; i <= 12; i++) {
    maso[index] = [i, palos[p]];
    index++;
  }
}


for (let i = maso.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  let temp = maso[i];
  maso[i] = maso[j];
  maso[j] = temp;
}
//Ejercicio 5
let masoFiltrado = [];

for (let i = 0; i < maso.length; i++) {
  if (maso[i][0] !== 8 && maso[i][0] !== 9) {
    masoFiltrado[masoFiltrado.length] = maso[i];
  }
}

let manos = [[], [], [], []];
let pos = 0;

for (let jugador = 0; jugador < 4; jugador++) {
  for (let carta = 0; carta < 3; carta++) {
    manos[jugador][carta] = masoFiltrado[pos];
    pos++;
  }
}

for (let i = 0; i < manos.length; i++) {
  console.log(`Jugador ${i + 1}:`);
  for (let j = 0; j < manos[i].length; j++) {
    let carta = manos[i][j];
    console.log(`  ${carta[0]} de ${carta[1]}`);
  }
}

console.log(masoFiltrado);
console.log("Cantidad de cartas:", maso.length); 