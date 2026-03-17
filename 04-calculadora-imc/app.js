"use strict"

function calcularIMC(peso, altura) {
  return peso / (altura * altura)
}

function classificarIMC(imc) {
  if (imc < 18.5) return { texto: "Abaixo do peso", classe: "abaixo-peso" }
  if (imc < 25)   return { texto: "Peso normal",    classe: "peso-normal" }
  if (imc < 30)   return { texto: "Sobrepeso",      classe: "sobrepeso" }
  if (imc < 35)   return { texto: "Obesidade grau I",   classe: "obesidade-1" }
  if (imc < 40)   return { texto: "Obesidade grau II",  classe: "obesidade-2" }
  return               { texto: "Obesidade grau III", classe: "obesidade-3" }
}

function handleClick() {
  const nome    = document.getElementById("nome").value.trim()
  const altura  = parseFloat(document.getElementById("altura").value)
  const peso    = parseFloat(document.getElementById("peso").value)
  const resultado = document.getElementById("resultado")

  if (!nome) {
    resultado.className = "resultado"
    resultado.innerHTML = "Informe seu nome para continuar."
    return
  }

  if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    resultado.className = "resultado"
    resultado.innerHTML = "Informe altura e peso válidos."
    return
  }

  const imc = calcularIMC(peso, altura)
  const { texto, classe } = classificarIMC(imc)

  resultado.className = "resultado " + classe
  resultado.innerHTML = `
    <div>
      <p class="resultado-nome">${nome}</p>
      <p class="resultado-imc">${imc.toFixed(1)}</p>
      <p class="resultado-classificacao">${texto}</p>
    </div>
  `
}
