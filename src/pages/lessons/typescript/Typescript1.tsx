// import React from 'react';

function TypeScript1() {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Fundamentos de TypeScript</h1>
      <br />
      <p>
        El lenguaje de programación TypeScript es una alternativa a JavaScript. En realidad, se le conoce como una superconjunto del lenguaje JavaScript, lo que significa que básicamente extiende el lenguaje con nuevas características y sintaxis. TypeScript puede hacer todo lo que JavaScript puede hacer, pero también viene con características adicionales y una nueva sintaxis.
        <br />
        <br />
        Es importante destacar que, por defecto, los navegadores no entienden TypeScript como entienden JavaScript. Por lo tanto, cuando escribimos código en TypeScript, debemos compilarlo a JavaScript para que los navegadores lo puedan entender. Sin embargo, no dejes que este paso adicional te desanime a utilizar TypeScript, ya que en la mayoría de los casos es muy fácil compilarlo. Además, TypeScript ofrece una gran cantidad de características útiles.
        <br />
        <br />
        Una de las primeras características útiles de TypeScript es que nos permite utilizar tipos estrictos. Esto significa que si declaro una variable en TypeScript con un cierto tipo, como un número, no puedo cambiar ese tipo más adelante asignándole un valor de tipo diferente, como una cadena o un booleano. Esto facilita el proceso de verificación de errores y depuración de nuestro código, además de obligarnos a escribir un código más limpio y mejor desde el principio. En contraste, JavaScript utiliza tipos dinámicos, lo que significa que las variables pueden cambiar de tipo en cualquier momento, lo que podría llevar a más errores.
        <br />
        <br />
        Otra ventaja de usar TypeScript es que podemos utilizar características modernas que se encuentran en versiones más recientes de JavaScript y que aún no son completamente compatibles directamente en los navegadores. Estas características podrían ser funciones de flecha, las palabras clave "let" y "const", la destructuración, entre otras. Todas estas características que no están automáticamente soportadas en todos los navegadores se pueden utilizar en TypeScript, y luego se compilan a un JavaScript más antiguo que los navegadores sí entienden. Esto es similar a herramientas como Babel, que permiten utilizar características modernas de JavaScript.
        <br />
        <br />
        Por último, TypeScript también incluye características adicionales que no existen en JavaScript, como genéricos, interfaces, tuplas y más. Estas características nos brindan más flexibilidad y poder expresivo al escribir nuestro código.
        <br />
        <br />
        En resumen, TypeScript es una alternativa a JavaScript que extiende el lenguaje con nuevas características y sintaxis. Aunque requiere compilarlo a JavaScript para que los navegadores lo entiendan, ofrece beneficios como el uso de tipos estrictos, la posibilidad de utilizar características modernas antes de que sean completamente soportadas en los navegadores y características adicionales que no están presentes en JavaScript
      </p>
      <br />
      <h2 className="text-center font-bold text-2xl">Requisitos previos</h2>
      <br />
      <p>
        Si estas buscando aprener TypeScript es porque ya tienes conocimientos previos sobre JavaScript, como el DOM, el código asincrónico y características modernas como las funciones flecha y las clases. Este curso está diseñado para enseñar TypeScript a aquellos que ya comprenden JavaScript. Sin embargo, si no tienes conocimientos sólidos de JavaScript, te recomendaría encarecidamente que comiences con un curso de JavaScript antes de adentrarte en TypeScript.
        <br />
        <br />
        Para poder utilizar TypeScript, necesitarás tener Node.js instalado en tu computadora. Node.js es una plataforma que nos permitirá utilizar NPM (Node Package Manager), el gestor de paquetes de Node, para instalar y compilar TypeScript. No es necesario que comprendas cómo funciona Node.js en detalle, simplemente lo necesitaremos para poder utilizar NPM y trabajar con TypeScript. Solo tendras que escribir en tu terminal el siguiente comando:
        <br />
        <br />
      </p>
      <p className="text-blue-500 text-center">
        <strong > npm i -g typescript</strong>
      </p>
    </div>
    
  );
}

export default TypeScript1;
