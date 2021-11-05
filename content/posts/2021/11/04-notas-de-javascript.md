---
title: "Machetes de JavaScript"
date: 2021-11-04 22:48:00
author: Joel A. Villarreal Bertoldi
slug: machete-javascript
tags: 
  - javascript
  - machete
description: Un resumen ultraresumido de los fundamentos de JavaScript.
cover: /images/posts/machetes-de-javascript/cover.jpg
fullscreen: true
---

¿Cómo se usaba `Array.find()`? ¿`substr` arrancaba con índice 0 ó 1? Les comparto un _machete_ 
(argentinismo que quiere decir "apunte") con ejemplos de uso de las funcionalidades elementales
de JavaScript.

No cubre absolutamente todos los casos y todo lo que JavaScript permite hacer hoy en día,
pero es un buen punto de partida.

_Gracias a las personas que conforman la W1 del Bootcamp de Frontend de MELI, que me_
_hicieron redescubrir el valor de compartir estas cosas que a veces uno mismo subestima._

## Fundamentos

### Variables y constantes

```jsx
// -----------------------------------------------------------------------
// Variables:
// Su valor puede ser reasignado.
// -----------------------------------------------------------------------
let variable = 4;
variable = 5;

// -----------------------------------------------------------------------
// Constantes:
// Su valor puede ser definido una sola vez.
// -----------------------------------------------------------------------
const constante = 10;
```

### Tipos de datos

```jsx
// -----------------------------------------------------------------------
// Tipos de datos
// -----------------------------------------------------------------------
const texto = 'abc'; // También se puede usar comilla doble: "abc"
const numero = 123;
const booleano = true;
const fecha = new Date();
const lista = [1, 2, 3];
const persona = { 
  nombre: 'Amanda',
  apellido: 'Gris',
  curso: 'JavaScript'
};
```

### Operadores aritméticos

```jsx
// -----------------------------------------------------------------------
// Operadores aritméticos
// -----------------------------------------------------------------------
const x = 1;
const y = 2;
const suma = x + y;
const resta = x - y;
const multiplicacion = x * y;
const division = x / y;
const concatenacion = texto + texto;
const resto = x % y;
```

### Operadores y valores lógicos

```jsx
// -----------------------------------------------------------------------
// Valores lógicos
// -----------------------------------------------------------------------
const verdadero = true;
const falso = false;

// -----------------------------------------------------------------------
// Operadores lógicos
// -----------------------------------------------------------------------
const conjuncion = verdadero && verdadero; // Y
const disyuncion = verdadero || falso; // O
const negacion = !verdadero; // NO
```

### Operadores de comparación

```jsx
// -----------------------------------------------------------------------
// Operadores de comparación
// -----------------------------------------------------------------------

  ==    igualdad no estricta
  ===   igualdad estricta
  >     mayor
  >=    mayor o igual
  <     menor
  <=    menor o igual
  !=    desigualdad no estricta
  !==   desigualdad estricta
```

## Estructuras de control

### Iteradores

```jsx
// Ejecutar X veces un bloque de código, con un contador ascendente.

    //|- Punto de inicio              //|- Por cuánto aumenta o reduce
    //|                               //|  el contador del iterador.
for (let contador = 0; contador < 10; contador += 1) {
                       //|
                       //|- Condición para que el código se ejecute.
  // Este código se repetirá 10 veces.
}

// Ejecutar X veces un bloque de código, con un contador descendente.
for (let contador = 10; contador > 0; contador -= 1) {
  // Este código se repetirá 10 veces.
}
```

### Condicionales

```jsx
if (condicionQueDevuelveVerdadero) {
  // Código que se ejecuta cuando la condición es verdadera.
} else {
  // Código que se ejecuta cuando la condición es falsa.
}

// -----------------------------------------------------------------------
// Condicionales de más de un caso
// -----------------------------------------------------------------------
if (condicion1) {
  // Código que se ejecuta cuando la condición 1 se cumple.
} else if (condicion2) {
  // Código que se ejecuta cuando la condición 2 se cumple,
  // pero la condición 1 no se cumple.
} else {
  // Código que se ejecuta cuando no se cumple ninguna de las
  // otras condiciones.
}
```

### Control de errores

```jsx
// Arrojar un error.
if (argumento === undefined || argumento === null) {
  throw new Error("El argumento es requerido");
}

// Controlar un error.
try {
  // Código que hace algo mal en algunos casos.
} catch (e) {
	// "e" contiene un objeto con información sobre el error.
	console.log(e);
}
```

## Librería de funciones

### Funciones matemáticas

```jsx
const esNumero = !isNaN(10);
const noEsNumero = isNaN("Hola");
const valorAbsoluto = Math.abs(-4); // 4
const redondeoHaciaArriba = Math.ceil(18.9); // 19
const redondeoHaciaAbajo = Math.floor(18.4); // 18
const redondeoAutomatico = Math.round(18.4); // 18
const maximo = Math.max(10, 20); // 20
const minimo = Math.min(10, 20); // 10
const potencia = Math.pow(10, 2); // 100
const numeroAleatorio = Math.random(); // Número al azar entre 0 y 1
const numeroAleatorioEntero = Math.floor(Math.random() * numeroMaximo) + 1;
```

### Funciones de texto

```jsx
const texto = 'Soy un texto';
const textoEnMayus = texto.toUpperCase(); // => 'SOY UN TEXTO'
const textoEnMinus = texto.toLowerCase(); // => 'soy un texto'
const longitudDeTexto = texto.length; // 12
const textoContieneTexto = texto.includes('texto'); // true
const textoDivididoPorEspacios = texto.split(' '); // ['Soy', 'un', 'texto']
const primerosCincoCaracteres = texto.substr(0, 5); // 'Soy u'

const codigoDeBarras = '51234';
const conCerosALaIzquierda = codigoDeBarras.padStart(10, '0'); // '0000051234'
const conCerosALaDerecha = codigoDeBarras.padEnd(10, '0'); // '5123400000'
```

### Funciones de fecha

```jsx
const fecha = new Date();
const diaDelMes = fecha.getDate(); // 25
const numeroDeMes = fecha.getMonth() + 1; // 3 (los meses van de 0 a 11, por eso +1)
const año = fecha.getFullYear(); // 2021
const hora = fecha.getHours(); // 20
const minutos = fecha.getMinutes(); // 5
const segundos = fecha.getSeconds(); // 35
const fechaJSON = fecha.toJSON(); // '2021-03-25T20:05:35.000Z'
```

## Listas

### Declaración de listas

```jsx
const listaDeFrutas = ["🍌", "🍅", "🍓"];
const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
const listaDePalabras = ["uno", "dos", "tres"];
const listasDeListas = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const listaDeVariasCosas = [1, "dos", [1, 2, 3]];
```

### Longitud y acceso por índice

```jsx
const longitudDeLista = listaDeFrutas.length;
const primerElementoDeLaLista = listaDeFrutas[0];
const segundoElementoDeLaLista = listaDeFrutas[1];
const ultimoElementoDeLaLista = listaDeFrutas[listaDeFrutas.length - 1];
```

### Agregar, sustituir y eliminar elementos

```jsx
// Agregar elementos al final de una lista
listaDeFrutas.push("🍎");

// Modificar elementos de una lista
listaDeFrutas[2] = "🍇";

// Eliminar elementos de una lista por su posición.
listaDeFrutas.splice(2, 1);

// Agregar elementos al comienzo de una lista.
listaDeFrutas.unshift("🥝");
```

## Manipulación de listas

```jsx
// Obtener un segmento de una lista.
const algunosNumeros = listaDeNumeros.slice(1, 4);

// Combinar listas por concatenación.
const listaDeCarnes = ["🍖", "🍗", "🥓"];
const listaDeVerduras = ["🍠", "🥬", "🧅"];
const ingredientes = listaDeCarnes.concat(listaDeVerduras);

// Crear una lista nueva a partir de la distribución
// de elementos de otras listas (spreading)
const salteado = [...listaDeCarnes, ...listaDeVerduras];

// Invertir el orden de una lista.
const verdurasAlRevés = listaDeVerduras.reverse(); // ["🧅", "🥬", "🍠"];

// Obtener el último elemento de una lista y eliminarlo de la misma.
const verduraQueSacoDelFinalDeLaLista = listaDeVerduras.pop(); // "🧅"

// Obtener el primer elemento de una lista y eliminarlo de la misma.
const carneQueSacoDelComienzoDeLaLista = listaDeVerduras.shift(); // "🍖"
```

### Búsqueda de elementos

```jsx
// Chequear si un elemento existe en una lista.
const tengoFrutillas = listaDeFrutas.includes("🍓"); // true o false

// Buscar la posición de un elemento en una lista.
const posicionCebolla = listaDeVerduras.indexOf("🧅");

// Filtrar elementos en una lista.
const listaDePares = listaDeNumeros.filter(
  function (numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
); // [2, 4, 6, 8]

// En una linea:
const listaDePares = listaDeNumeros.filter(numero => numero % 2 === 0);

// Eliminar elementos usando filtros
const listaConCosasAEliminar = [3, 1, 7, 0, 2, 4, 8, 9];
const listaSin4PorFiltros = listaConCosasAEliminar.filter(function (numero) {
  if (numero !== 4) {
    return true;
  }
}); // o bien: listaConCosasAEliminar.filter(numero => numero !== 4);

// Eliminar elementos usando búsqueda de posición y segmentación
const posicionDel4 = listaConCosasAEliminar.indexOf(4);
const primerSegmento = listaConCosasAEliminar.slice(0, posicionDel4);
const segundoSegmento = listaConCosasAEliminar.slice(posicionDel4 + 1);
const listaSin4PorSegmentos = primerSegmento.concat(segundoSegmento);

// Buscar la primera ocurrencia de un elemento en una lista
const primerNumeroPar = listaDeNumeros.find(function (numero) {
  if (numero % 2 === 0) {
    return true;
  }
}); // o bien: listaDeNumeros.find(numero => numero % 2 === 0);
```

### Operaciones lógicas con listas

```jsx
// Verificar si todos los elementos cumplen una condición dada.
const todosSonPares = [1, 2, 3, 4].every(numero => numero % 2 === 0); // false

// Verificar si algunos de los elementos cumplen una condición dada.
const algunosSonPares = [1, 2, 3, 4].some(numero => numero % 2 === 0); // true
```

### Transformación de listas

```jsx
// Multiplicar todos los números de una lista por un factor.
const dobles = [1, 2, 3, 4].map(numero => numero * 2); // [2, 4, 6, 8]

// Convertir todos los números en letras.
// [4, 2, 1, 0] => ['cuatro', 'dos', 'uno', 'cero']
const nombresDeNumeros = ['cero', 'uno', 'dos', 'tres', 'cuatro'];
const listaDeNumeros = [4, 2, 1, 0];
const numerosComoLetras = listaDeNumeros.map(numero => nombresDeNumeros[numero + 1]);
```

### Reducción de listas

```jsx
// Obtener la suma de todos los números de una lista.
const listaDeNumeros = [1, 2, 3, 4];
const suma = listaDeNumeros.reduce((acumulado, numero) => acumulado + numero); // 10
```

## Modelo de objeto de documento (DOM)

### Acceso a elementos

```jsx
// Buscar un elemento por su ID.
const elementoPorID = document.querySelector('#elemento');

// Buscar un elemento por su clase.
const elementoPorClase = document.querySelector('.elemento');

// Buscar un elemento por cualquier selector CSS:
// En este caso, el primer campo de texto de la página.
const elementoPorCSS = document.querySelector('input[type="text"]');

// Buscar todos los elementos que coincidan con el selector CSS.
// En este caso, todos los campos de texto de la página.
const elementosPorCSS = document.querySelectorAll('input[type="text"]');
```

### Asignación de eventos

```jsx
// Agregar un evento "click" a un botón
const boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
  // Cuando se haga clic en el botón, se mostrará una alerta.
	alert('Botón clickeado.');
});
```
