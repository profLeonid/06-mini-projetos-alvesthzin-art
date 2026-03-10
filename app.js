"use strict"

function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(preco) || isNaN(desconto) || preco <= 0 || desconto < 0) {
      resultado.className = 'resultado';
      resultado.innerHTML = 'Informe valores válidos para continuar.';
      return;
    }
  
    const economizado = (preco * desconto) / 100;
    const precoFinal = preco - economizado;
  
    resultado.innerHTML = `
      <div class="linha-economizado">Você economiza → R$ ${economizado.toFixed(2).replace('.', ',')}</div>
      <div class="linha-total">  - Preço final → R$ ${precoFinal.toFixed(2).replace('.', ',')}</div>
    `;
  
    resultado.classList.remove('verde', 'amarelo', 'vermelho');
  
    if (desconto <= 5) {
      resultado.classList.add('verde');
    } else if (desconto <= 10) {
      resultado.classList.add('amarelo');
    } else {
      resultado.classList.add('vermelho');
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('desconto').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') calcularDesconto();
    });
  });