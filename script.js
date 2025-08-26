let pantalla = document.getElementById("pantalla");

function agregar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = "";
}

function calcular() {
  try {
    let expresion = pantalla.value.replace(/%/g, "/100");
    pantalla.value = eval(expresion);
  } catch {
    pantalla.value = "Error";
  }
}


