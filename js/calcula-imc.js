let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        console.log ("Peso invalido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso Invalido";
        paciente.classList.add("paciente-invalido"); 
    }

    if (!alturaEhValida){
        console.log("Altura invalida");
        alturaEhValida = false;
        tdAltura.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido"); 
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else{
        tdImc.textContent = "Altura e/ou peso invalidos!"
    }

    console.log(paciente);
    console.log(peso);
    console.log(altura);
    console.log(imc); 
    console.log(pacientes[i]);
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}

function validaPeso(){
    if (peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(){
    if (altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}


/*

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

   var pacienteTr = document.createElement("tr"); 
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

titulo.addEventListener("click", function(){
    console.log("Ola eu fui clicado!");
});
*/