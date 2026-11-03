//Exercício 4: Simplificando com Arrow Functions Inline ⚡

function processarTexto(texto, callbackModificadora) {
  callbackModificadora(texto);
}

processarTexto("senai valinhos", (t) => console.log(t.toUpperCase()));