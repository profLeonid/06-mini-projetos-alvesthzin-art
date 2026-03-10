"use strict"

function removerClasses (){
    const resultado = document.getElementById("resultado")
    resultado.classList.remove("apto", "nao-apto")
}


function avaliar (){
    const tempo = document.getElementById("tempo")
    const resultado = document.getElementById("resultado")

    removerClasses()
    if(tempo.value < 14){
        resultado.textContent = "Apto"
        removerClasses()
        resultado.classList.add("apto")
    }else{
        resultado.textContent = "Não apto"
        removerClasses()
        resultado.classList.add("nao-apto")

    }
}