---
title: Composición de paletas de color a través de pruebas de contraste y proporción
date: 2020-04-10 00:00:00
author: Joel A. Villarreal Bertoldi
slug: composicion-paletas-color-contraste-proporcion
tags: 
  - diseño gráfico
  - color
  - experimentos
description: Existen diversos criterios a la hora de seleccionar los tonos y niveles de luz que conformarán una paleta de colores, pero ¿cómo podemos probar rápidamente cómo se comportarán estos colores al interactuar los unos con los otros?
cover: /images/posts/composicion-paletas-color-contraste-proporcion/cover.jpg
fullscreen: true
---

Existen diversos criterios a la hora de seleccionar los tonos y niveles de luz que conformarán una paleta de colores, pero ¿cómo podemos probar rápidamente cómo se comportarán estos colores al interactuar los unos con los otros?

La exploración del color puede llevarse adelante a través de composiciones libres para crear diseños o combinaciones cromáticas nuevas y originales. La atención exclusiva a las relaciones cromáticas supone un punto de vista creativo que da a conocer a la persona un rico legado de conocimientos y experiencias. La perspectiva cromática propuesta es fundamentalmente un _punto de vista visual_<sup>1</sup>.

Inspirado en las composiciones de Garth Lewis, diseñé una figura prototipo que se podía utilizar para evaluar relaciones de color en cuanto a proporción:

![Yuxtaposición de figuras geométricas, cada una con su color](/images/posts/composicion-paletas-color-contraste-proporcion/figure-1.svg)

Esta estructura yuxtapuesta contiene cuatro figuras geométricas de distinto tamaño, en orden decreciente, desde la más externa a la más interna. En la figura de ejemplo, el orden de espacio ocupado por colores es: rojo, azul, beige y marrón.

¿Qué sucede cuando rotamos la ubicación de los colores? _Utilizá la función de Modo Nocturno de la página y vas a notar más cosas sucediendo._

![Yuxtaposición de figuras geométricas, rotando por cada color](/images/posts/composicion-paletas-color-contraste-proporcion/figure-2.svg)

Pareciera que cuando el azul está sobre un fondo oscuro, se percibe como más claro que cuando está sobre un fondo blanco. El brillo del color rojo podría percibirse como más intenso según si está rodeado de beige o de azul. Empezamos a observar cómo el peso visual en tanto contraste de luz empieza a generar distintos caminos en el recorrido del ojo.

Cuando un color con alta saturación (es decir, en su máximo estado de pureza, lejos del gris) se encuentra rodeado por colores menos saturados o más luminosos (por ejemplo, un punto rojo en un fondo luminoso), el ojo se ve atraído hacía ese punto.

También podríamos pensar que se modifica la jerarquía de profundidad en estas figuras: en algún diseño quizá da la sensación que la segunda figura más grande de la composición está al frente, mientras que en otras, está más atrás.

> Probar los colores con este tipo de composiciones permite descubrir relaciones nuevas en cuanto al orden y la proporción de espacio ocupado en el plano.

Este experimento puede extenderse para evaluar no sólo variables tonales, si no también de luminosidad:

![Tablero completo de pruebas, con tonos y luminosidades](/images/posts/composicion-paletas-color-contraste-proporcion/figure-3.svg)

_Dato curioso: ¿notaste que en un fondo oscuro, las barras de color de este tablero parecen ir aumentando en tamaño, pero que en un fondo claro tienen la misma altura?_

## ¿Es la única composición válida?

Se puede utilizar cualquier figura arbitraria, rellena con distintas figuras por dentro, generando espacios para probar la paleta. Esto permite en un vistazo ver las relaciones que se producen al superponer o acercar ciertos colores.

## ¿Para qué puede servir esto?

Es muy útil para detectar qué combinaciones de colores tienen mayor o menor contraste en una misma gama tonal. En el caso de distintas tonalidades, permite determinar la proporción de color ideal para lograr ciertos destaques (ejemplo: cuánto rojo conviene usar sobre amarillo).

## ¡Hay una versión on-line!

Empecé a trabajar en un prototipo de aplicación web que permite simular estos tableros de evalución de color, llamado [cromimap](https://cromimap.now.sh) (_cromi_ = color, _map_ = mapa). Por ahora sólo funciona en dispositivos desktop y no tiene mucha funcionalidad, pero permite especificar hasta cuatro colores y generar la rotación correspondiente. También incluye un comando para elegir colores al azar. ¡Ideal para buscar ideas!

## Bibliografía
<sup>1</sup> Lewis, G.: 2000 combinaciones de color para diseñadores gráficos, textiles y artesanales. Editorial Blume. Barcelona, 2009.
