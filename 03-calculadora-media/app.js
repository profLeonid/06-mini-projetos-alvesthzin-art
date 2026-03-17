"use strict"

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3
}

function escolherSituacao(media) {
  if (media >= 7) return { texto: "Aprovado", classe: "aprovado" }
  if (media >= 5) return { texto: "Recuperação", classe: "recuperacao" }
  return { texto: "Reprovado", classe: "reprovado" }
}

function handleClick() {
  const nota1 = parseFloat(document.getElementById("nota1").value)
  const nota2 = parseFloat(document.getElementById("nota2").value)
  const nota3 = parseFloat(document.getElementById("nota3").value)
  const resultado = document.getElementById("resultado")

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    resultado.className = "resultado"
    resultado.innerHTML = "Informe as três notas para continuar."
    return
  }

  if ([nota1, nota2, nota3].some(n => n < 0 || n > 10)) {
    resultado.className = "resultado"
    resultado.innerHTML = "As notas devem estar entre 0 e 10."
    return
  }

  const media = calcularMedia(nota1, nota2, nota3)
  const { texto, classe } = escolherSituacao(media)

  resultado.className = "resultado " + classe
  resultado.innerHTML = `
    <span class="media-valor">${media.toFixed(1)}</span>
    <span class="situacao">${texto}</span>
  `
}
