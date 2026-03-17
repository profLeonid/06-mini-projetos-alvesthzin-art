"use strict"
 
function calcularValorEconomizado(preco, desconto) {
  return preco * desconto / 100
}
 
function calcularPrecoFinal(preco, valorEconomizado) {
  return preco - valorEconomizado
}
 
function escolherCor(desconto) {
  if (desconto <= 5) {
    return "desconto1"
  } else if (desconto <= 10) {
    return "desconto2"
  } else {
    return "desconto3"
  }
}
 
function handleClick() {
  const preco = parseFloat(document.getElementById("preco").value)
  const desconto = parseFloat(document.getElementById("desconto").value)
  const resultado = document.getElementById("resultado")
 
  if (isNaN(preco) || isNaN(desconto) || preco <= 0 || desconto < 0) {
    resultado.className = "resultado"
    resultado.innerHTML = "Informe valores válidos para continuar."
    return
  }
 
  const valorEconomizado = calcularValorEconomizado(preco, desconto)
  const precoFinal = calcularPrecoFinal(preco, valorEconomizado)
  const cor = escolherCor(desconto)
 
  resultado.className = "resultado " + cor
  resultado.innerHTML = `
    <div>
      <p>Você economiza: <strong>R$ ${valorEconomizado.toFixed(2).replace(".", ",")}</strong></p>
      <p>Preço final: <strong>R$ ${precoFinal.toFixed(2).replace(".", ",")}</strong></p>
    </div>
  `
}