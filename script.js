let btn_encriptar = document.getElementById("btn-encriptar");
let btn_desencriptar = document.getElementById("btn-desencriptar");
let message = document.getElementById("msg");
let btn_copy = document.getElementById("btn-copy");

//validar minusculas

function validar(msj) {
  const letras = " abcdefghijklmnñopqrstuvwxyz";
  let validation = true;
  for (let i = 0; i < msj.length; i++) {
    let letra = letras.indexOf(msj[i]);
    if (letra == -1) {
      validation = false;
    }
  }
  return validation;
}

function encriptar() {
  let textInput = document.getElementById("input-texto").value;
  console.log(textInput);
  textEncrypted = "";

  if (validar(textInput)) {

      textEncrypted = textInput.replace(/e/gi , "enter").replace(/i/gi , "imes").replace(/a/gi , "ai").replace(/o/gi , "ober").replace(/u/gi , "ufat")

    message.value = textEncrypted;
    console.log(textEncrypted);
  } else {
    alert("Caracteres invalidos");
  }
}

function desencriptar() {
  let textInput = document.getElementById("input-texto").value;

  console.log(textInput )
  textDecrypted = "";

  if (validar(textInput)) {

      textDecrypted = textInput.replace(/ai/gi , "a").replace(/enter/gi , "e").replace(/imes/gi , "i").replace(/ober/gi , "o").replace(/ufat/gi , "u");
    
    console.log(textDecrypted);
    message.value = textDecrypted;
  } else {
    alert("Caracteres invalidos");
  }
}

function copyText() {
  navigator.clipboard.writeText(message.value);
}

function limpiarFormulario() {
  document.getElementById("input-texto").value = "";
}

btn_encriptar.onclick = encriptar;
btn_desencriptar.onclick = desencriptar;
btn_copy.onclick = copyText;
document.getElementById("input-texto").onclick = limpiarFormulario;
