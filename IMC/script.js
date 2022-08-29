function Start(){
    var botao = document.querySelector('#botao')
    console.log(botao);
    botao.addEventListener('click', BotaoVar)
}

function CalculaIMC(peso, altura) {
    var resultado = document.querySelector('.resultado')
    var IMC = peso / altura**2
    var redondo = IMC.toFixed(2)
    calculaFaixa(redondo);
    return resultado.innerHTML = 'O seu IMC é: ' + redondo;
}

function BotaoVar(){
    var inputPeso = document.querySelector('#peso')
    var inputAltura = document.querySelector('#altura')
    var peso = Number(inputPeso.value);
    var altura = Number(inputAltura.value);
    return CalculaIMC(peso, altura)
}

function calculaFaixa(IMC){
    var strong = document.querySelector('.nivel')
    if (IMC < 16){
        return strong.innerHTML = 'Faixa Inválido com esse peso você está morto!'
    }
    else if (IMC <= 16.9){
        return strong.innerHTML = 'Muito abaixo do peso!';
    }
    else if  (IMC <= 18.4){
        return strong.innerHTML = 'Abaixo do peso!';
    }
    else if  (IMC <= 24.9){
        return strong.innerHTML = 'Peso ideal!';
    }
    else if  (IMC <= 29.9){
        return strong.innerHTML = 'Acima do peso!';
    }
    else if  (IMC <= 34.9){
        return strong.innerHTML = 'Obesidade grau I';
    }
    else if  (IMC <= 40){
        return strong.innerHTML = 'Obesidade grau II';
    }
    else if  (IMC > 40){
        return strong.innerHTML = 'Obesidade grau III';
    }
}

Start()

