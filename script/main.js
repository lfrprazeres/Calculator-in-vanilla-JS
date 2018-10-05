var basic = document.querySelector('.basic');
var log = document.querySelector('.log');
var potenciacao = document.querySelector('.potenciacao');
var radiciacao = document.querySelector('.radiciacao');
var primeiroGrau = document.querySelector('.primeiro-grau');
var segundoGrau = document.querySelector('.segundo-grau');
var retaCalc = document.querySelector('.retaCalc');
var fxgx = document.querySelector('.fxgx');

let graphicContainer = document.querySelector('.graphicContainer');
let calculator = document.querySelector('.calculator');
let grafico = document.getElementById('graphic').getContext('2d');

/* ESCOLHA DO TIPO DE CÁLCULO*/
function escolha(){
    var escolha = document.querySelector('.escolha');
    switch(escolha.value) {
        case "1":
            basic.style.display = "flex";
            potenciacao.style.display = "none";
            log.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "2":
            potenciacao.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "3":
            radiciacao.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "4":
            log.style.display = "flex";
            basic.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "5":
            primeiroGrau.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "6":
            segundoGrau.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "7":
            retaCalc.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            fxgx.style.display = "none";
            break;
        case "8":
            fxgx.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        default: 
            alert('escolha uma operação válida');
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            fxgx.style.display = "none";
            
    }
}

/* CÁLCULO DAS OPERAÇÕES BÁSICAS*/
function basicCalc(){
    var basicOperation = document.querySelector('.basicOperation').value;
    var total = document.querySelector('.basicTotal');
    var firstInput = document.querySelector('.n1');
    var secondInput = document.querySelector('.n2');
    var n1 = parseInt(document.querySelector('.n1').value);
    var n2 = parseInt(document.querySelector('.n2').value);
    let escolha = document.querySelector('.divisaoFloat');
    if(isNaN(n1) || isNaN(n2)){
        if(isNaN(n1) && isNaN(n2)) {
            firstInput.placeholder = "digite um número válido";
            secondInput.placeholder = "digite um número válido";
        }else if(isNaN(n1)){
            firstInput.placeholder = "digite um número válido";
        } else {
            secondInput.placeholder = "digite um número válido";
        }
    } else {
        switch (basicOperation){
        case "1":
            total.value = n1 - n2;
            break;
        case "2":
            total.value = n1 + n2;
            break;
        case "3":
            total.value = n1 * n2;
            break;
        case "4":
            if(n2 == 0) {
                alert('divisão por 0 não é possível')
            } else if (n1 / n2 % 1 != 0) {
                escolha.style.display = "flex";
            } else {
                total.value = n1 / n2;
            }
            break;
        default:
            total.value = "escolha uma operação";
        }
    }
}

/* SELEÇÃO DE TIPO DE RESPOSTA PARA DIVISÃO */
function divisaoFloat() {
    let escolha = document.querySelector('.divisaoFloat');
    var total = document.querySelector('.basicTotal');
    let n1 = parseInt(document.querySelector('.n1').value);
    let n2 = parseInt(document.querySelector('.n2').value);
    switch(escolha.value) {
        case "1":
            total.value = n1 / n2;
            break;
        case "2":
            while(n1 % 2 == 0 && n2 % 2 == 0){
                n1 = n1 / 2;
                n2 = n2 / 2;
            }
            while(n1 % 3 == 0 && n2 % 3 == 0){
                n1 = n1 / 3;
                n2 = n2 / 3;
            }
            while(n1 % 5 == 0 && n2 % 5 == 0){
                n1 = n1 / 5;
                n2 = n2 / 5;
            }
            while(n1 % 7 == 0 && n2 % 7 == 0){
                n1 = n1 / 7;
                n2 = n2 / 7;
            }
            total.value = n1 + "/" + n2;
            break;
        default:
            alert('escolha uma opção válida');
    }
}


/* CÁLCULO DE LOGARÍTMO */

function logCalc(){
    var firstInput = document.querySelector('.logaritmando');
    var logaritmando = parseInt(document.querySelector('.logaritmando').value);

    var secondInput = document.querySelector('.baseLog');
    var base = document.querySelector('.baseLog').value;

    var logTotal = document.querySelector('.logTotal');
    if(isNaN(logaritmando)){
        alert('Digite um logaritmando válido')
    }else{/* VALIDAÇÃO DA BASE */
        if(typeof(base) == "string") {
            if(base == "e"){
                /* VALIDAÇÃO DE LOGARITMANDO */
                if(isNaN(logaritmando)) {
                    firstInput.placeholder = "Digite um logaritmando válido";
                } else {
                    logTotal.value = Math.log(logaritmando);
                }
            } else {
                parseInt(base)
                if(isNaN(base)) {
                    alert("Digite uma base válida");
                }
                else {
                    logTotal.value = (Math.log(logaritmando) / Math.log(base));
                }
            }
        }
    }
}

/* POTENCIAÇÃO */

function powCalc(){
    var base = parseInt(document.querySelector('.powBase').value);
    var expoente = parseInt(document.querySelector('.powExp').value);

    var total = document.querySelector('.powTotal');

    if(isNaN(base) || isNaN(expoente)) {
        if(isNaN(base) && isNaN(expoente)){
            alert('Digite uma base e um expoente válidos');
        } else if(isNaN(base)) {
            alert('Digite uma base válida');
        } else if(isNaN(expoente)) {
            alert('Digite um expoente válido');
        }
    } else{
        total.value = Math.pow(base,expoente)
    }
}

/* RADICIAÇÃO */

function radCalc() {
    var radicando = parseInt(document.querySelector('.radicando').value);
    var indice = parseInt(document.querySelector('.indiceRad').value);

    var total = document.querySelector('.radTotal');

    if(isNaN(radicando) || isNaN(indice)) {
        if(isNaN(radicando) && isNaN(indice)){
            alert('Digite um radicando e um índice válidos');
        } else if(isNaN(radicando)) {
            alert('Digite um radicando válido');
        } else if(isNaN(indice)) {
            alert('Digite um índice válido');
        }
    } else{
        total.value = Math.pow(radicando,(1 / indice));
    }
}

/* EQUAÇÃO DE PRIMEIRO GRAU */

function primeiroGrauCalc(){
    var a = parseFloat(document.querySelector('.PrimeiroGrauA').value);
    var b = parseFloat(document.querySelector('.PrimeiroGrauB').value);
    var equacao = document.querySelector('.equacaoPrimeiroGrau');
    let graficoButton = document.querySelector('.primeiroGrauGrafico');
    var total = document.querySelector('.primeiroGrauTotal');

    if(isNaN(a) || isNaN(b)) {
        if(isNaN(a) && isNaN(b)){
            alert('Digite um valor A ou B válidos');
        } else if(isNaN(a)){
            alert('Digite um valor A válido');
        } else if(isNaN(b)){
            alert('Digite um valor B válido');
        }
    } else {
        equacao.innerHTML = "A equação é: " + a + "x + " + b + " = 0"; 
        total.value = (-b / a);
        graficoButton.style.display = "flex";
    }
}
/* CRIANDO O GRÁFICO DA EQUAÇÃO DE PRIMEIRO GRAU */

function primeiroGrauGrafico(){
    var a = parseFloat(document.querySelector('.PrimeiroGrauA').value);
    var b = parseFloat(document.querySelector('.PrimeiroGrauB').value);
    let x1 = document.querySelector('.primeiroGrauTotal').value;
    let y1 = 0;
    var x2 = (-b + 1) / a;
    var y2 = 1;
    alert('Este recurso ainda não está disponível');
    /*
    graphicContainer.style.display = "flex";
    calculator.style.display = "none";

    let chart = new chart(grafico, {
        type: 'line',
    
        data: {
            labels: [
                x1,
                x2
            ],
            datasets: [{
                label: 'dos pontos (' + x1 + ',' + y1 + ") aos pontos (" + x2 + ',' + y2 + ")",
                data: [
                    y1,
                    y2
                ],
                borderColor: "#663399"
            }]
        }
    });
    */
}

/* Volta para a calculadora */
function back(){
    graphicContainer.style.display = "none";
    calculator.style.display = "block";
}

function segundoGrauCalc() {
    var a = parseInt(document.querySelector('.segundoGrauA').value);
    var b = parseInt(document.querySelector('.segundoGrauB').value);
    var c = parseInt(document.querySelector('.segundoGrauC').value);
    var equacao = document.querySelector('.equacaoSegundoGrau');

    var primeiraRaiz = document.querySelector('.segundoGrauPrimeira');
    var segundaRaiz = document.querySelector('.segundoGrauSegunda');

    var xone = 0;
    var xtwo = 0;
    var deltaCalc = Math.pow(b,2) - 4 * a * c;
    var delta = Math.pow(deltaCalc,(1/2));


    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        if(isNaN(a) && isNaN(b) && isNaN(c)){
            alert('Digite um valor A e B e C válidos');
        } else if(isNaN(a) && isNaN(b)){
            alert('Digite um valor A e B válids');
        } else if(isNaN(b) && isNaN(c)){
            alert('Digite um valor B e C válidos');
        } else if(isNaN(a) && isNaN(c)) {
            alert('Digite um valor A e C válidos');
        } else if(isNaN(a)){
            alert('Digite um valor A válido');
        } else if(isNaN(b)){
            alert('Digite um valor B válido');
        } else if(isNaN(c)){
            alert('Digite um valor C válido');
        }
    } else {
        equacao.innerHTML = "A equação é: " + a + "x² + " + b + "x + " + c +  "= 0";
        if(delta < 0){
            total.value = "não há raizes reais nessa equação"
        } else if(delta ==  0){
            xone = -b / (2*a);
            primeiraRaiz.value = "A raiz é: " + xone;
            segundaRaiz.value = "essa equação só possui uma raíz"
        } else if(isNaN(delta)){
            primeiraRaiz.value = "Não há raízes pois delta ∉ R";
            segundaRaiz.value = "Não há raízes pois o delta ∉ R"
        } else {
            xone = (-b + delta) / (2 * a);
            xtwo = (-b - delta) / (2 * a);

            primeiraRaiz.value = "A primeira raiz é: " + xone;
            segundaRaiz.value = "A segunda raiz é: " + xtwo;
        }
    }
}

/* SELEÇÃO DO CÁLCULO DE RETA */

function selectRetaCalc(){
    var escolha = parseInt(document.querySelector('.retaSelect').value);
    var retaXAB = document.querySelector('.retaXAB');
    var retaYAB = document.querySelector('.retaYAB');
    var retaXY = document.querySelector('.retaXY');
    var calcX = document.querySelector('.calcX');
    var calcY = document.querySelector('.calcY');
    var y,x;
    switch(escolha) {
        case 1:
            retaXAB.style.display = "flex";
            retaYAB.style.display = "none";
            retaXY.style.display = "none";
            break;
        case 2:
            retaYAB.style.display = "flex";
            retaXAB.style.display = "none";
            retaXY.style.display = "none";
            break;
        case 3:
            retaXY.style.display = "flex";
            retaXAB.style.display = "none";
            retaYAB.style.display = "none";
            break;
        case 4:
            alert('sabendo só A e B existirão infinitas coordenadas');
            retaXAB.style.display = "none";
            retaYAB.style.display = "none";
            retaXY.style.display = "none";
            break;
        default:
            alert('Escolha uma opção válida');

    }
    
    if(escolha == ""){
        alert('Escolha uma opção válida')
    } else if(escolha == 1){
        calcX.style.display = "flex";
        calcY.style.display = "none";
    } else if(escolha == 2){
        calcY.style.display = "flex";
        calcX.style.display = "none";
    }
}

/* CALCULO DA RETA DANDO X, A E B*/

function retaXAB(){
    let a = parseInt(document.querySelector('.retaA-XAB').value);
    let b = parseInt(document.querySelector('.retaB-XAB').value);
    let primeiroX = parseInt(document.querySelector('.retaFirstX').value);
    let segundoX = parseInt(document.querySelector('.retaSecX').value);
    let primeiraCoordenada = document.querySelector('.answerOneXAB');
    let segundaCoordenada = document.querySelector('.answerTwoXAB');
    var equacao = document.querySelector('.equacaoRetaXAB');
    let calculo = 0;

    if(isNaN(a) || isNaN(b) || isNaN(primeiroX) || isNaN(segundoX)){
        if(isNaN(a) && isNaN(b) && isNaN(primeiroX) && isNaN(segundoX)){
            alert('Digite um valor válido para A, B, primeiro X e segundo X')
        } else if(isNaN(a) && isNaN(b) && isNaN(primeiroX)){
            alert('Digite um valor válido para A, B e primeiro X')
        } else if(isNaN(a) && isNaN(b) && isNaN(segundoX)){
            alert('Digite um valor válido para A,B e segundo X')
        } else if(isNaN(a) && isNaN(primeiroX) && isNaN(segundoX)){
            alert('Digite um valor válido para A, primeiro X e segundo X')
        } else if(isNaN(b) && isNaN(primeiroX) && isNaN(segundoX)){
            alert('Digite um valor válido para B, primeiro X e segundo X')
        } else if(isNaN(a) && isNaN(b)){
            alert('Digite um valor válido para A e B')
        } else if(isNaN(a) && isNaN(primeiroX)){
            alert('Digite um valor válido para A e Primeiro X')
        } else if(isNaN(a) && isNaN(segundoX)){
            alert('Digite um valor válido para A e Segundo X')
        } else if(isNaN(b) && isNaN(primeiroX)){
            alert('Digite um valor válido para B e Primeiro X')
        } else if(isNaN(b) && isNaN(segundoX)) {
            alert('Digite um valor válido para B e Segundo X')
        } else if(isNaN(primeiroX) && isNaN(segundoX)){
            alert('Digite um valor válido para Primeiro X e Segundo X')
        } else if(isNaN(a)){
            alert('Digite um valor válido para A')
        } else if(isNaN(b)){
            alert('Digite um valor válido para B')
        } else if(isNaN(primeiroX)){
            alert('Digite um valor válido para o Primeiro X')
        } else if(isNaN(segundoX)){
            alert('Digite um valor válido para o Segundo X')
        }
    } else {
        calculo = a * primeiroX + b;
        primeiraCoordenada.value = "(" + primeiroX + "," + calculo + ")";
        calculo = a * segundoX + b;
        segundaCoordenada.value = "(" + segundoX + "," + calculo + ")";
        equacao.innerHTML = "o cálculo ficaria: " + "f(x) = " + a + "x " + " + " + b;
        equacao.style.margin = "0px 0px 10px 0px";
    }
}

/* CALCULO DA RETA DANDO Y, A E B*/

function retaYAB(){
    let a = parseInt(document.querySelector('.retaA-YAB').value);
    let b = parseInt(document.querySelector('.retaB-YAB').value);
    let primeiroY = parseInt(document.querySelector('.retaFirstY').value);
    let segundoY = parseInt(document.querySelector('.retaSecY').value);
    let primeiraCoordenada = document.querySelector('.answerOneYAB');
    let segundaCoordenada = document.querySelector('.answerTwoYAB');
    var equacao = document.querySelector('.equacaoRetaYAB');
    let calculo = 0;

    if(isNaN(a) || isNaN(b) || isNaN(primeiroY) || isNaN(segundoY)){
        if(isNaN(a) && isNaN(b) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para A, B, primeiro Y e segundo Y')
        } else if(isNaN(a) && isNaN(b) && isNaN(primeiroY)){
            alert('Digite um valor válido para A, B e primeiro Y')
        } else if(isNaN(a) && isNaN(b) && isNaN(segundoY)){
            alert('Digite um valor válido para A,B e segundo Y')
        } else if(isNaN(a) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para A, primeiro Y e segundo Y')
        } else if(isNaN(b) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para B, primeiro Y e segundo Y')
        } else if(isNaN(a) && isNaN(b)){
            alert('Digite um valor válido para A e B')
        } else if(isNaN(a) && isNaN(primeiroY)){
            alert('Digite um valor válido para A e Primeiro Y')
        } else if(isNaN(a) && isNaN(segundoY)){
            alert('Digite um valor válido para A e Segundo Y')
        } else if(isNaN(b) && isNaN(primeiroY)){
            alert('Digite um valor válido para B e Primeiro Y')
        } else if(isNaN(b) && isNaN(segundoY)) {
            alert('Digite um valor válido para B e Segundo Y')
        } else if(isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para Primeiro Y e Segundo Y')
        } else if(isNaN(a)){
            alert('Digite um valor válido para A')
        } else if(isNaN(b)){
            alert('Digite um valor válido para B')
        } else if(isNaN(primeiroY)){
            alert('Digite um valor válido para o Primeiro Y')
        } else if(isNaN(segundoY)){
            alert('Digite um valor válido para o Segundo Y')
        }
    } else {
        calculo = (primeiroY - b) / a
        primeiraCoordenada.value = "(" + calculo + "," + primeiroY + ")";
        calculo = (segundoY - b) / a
        segundaCoordenada.value = "(" + calculo + "," + segundoY + ")";
        equacao.innerHTML = "o cálculo ficaria: " + "f(x) = " + a + "x " + " + " + b;
        equacao.style.margin = "0px 0px 10px 0px";
    }
}

/* CALCULO DA RETA DANDO X e Y*/

function retaXY(){
    let primeiroX = parseInt(document.querySelector('.retaFirstX-XY').value);
    let primeiroY = parseInt(document.querySelector('.retaFirstY-XY').value);
    let segundoX = parseInt(document.querySelector('.retaSecX-XY').value);
    let segundoY = parseInt(document.querySelector('.retaSecY-XY').value);
    let primeiraCoordenada = document.querySelector('.answerOneXY');
    let segundaCoordenada = document.querySelector('.answerTwoXY');
    var equacao1 = document.querySelector('.equacaoRetaXY1');
    var equacao2 = document.querySelector('.equacaoRetaXY2');
    let equacaoTotal = document.querySelector('.resultadoRetaXY');
    var valorA = document.querySelector('.valorA-XY');
    var valorB = document.querySelector('.valorB-XY');

    let deltaX = segundoX - primeiroX;
    let deltaY = segundoY - primeiroY;
    let calculoa = 0;
    let calculob = 0;

    if(isNaN(primeiroX) || isNaN(segundoX) || isNaN(primeiroY) || isNaN(segundoY)){
        if(isNaN(primeiroX) && isNaN(segundoX) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para o primeiro X, segundo X, primeiro Y e para o segundo Y')
        } else if(isNaN(primeiroX) && isNaN(segundoX) && isNaN(primeiroY)){
            alert('Digite um valor válido para o primeiro X, segundo X e para o primeiro Y')
        } else if(isNaN(primeiroX) && isNaN(segundoX) && isNaN(segundoY)){
            alert('Digite um valor válido para o primeiro X, segundo X e para o segundo Y')
        } else if(isNaN(primeiroX) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para o primeiro X, primeiro Y e para o segundo Y')
        } else if(isNaN(segundoX) && isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para o segundo X, primeiro Y e para o segundo Y')
        } else if(isNaN(primeiroX) && isNaN(segundoX)){
            alert('Digite um valor válido para o primeiro X e para o segundo X')
        } else if(isNaN(primeiroX) && isNaN(primeiroY)){
            alert('Digite um valor válido para o primeiro X e para o Primeiro Y')
        } else if(isNaN(primeiroX) && isNaN(segundoY)){
            alert('Digite um valor válido para o primeiro X e para o segundo Y')
        } else if(isNaN(segundoX) && isNaN(primeiroY)){
            alert('Digite um valor válido para o segundo X e primeiro Y')
        } else if(isNaN(segundoX) && isNaN(segundoY)) {
            alert('Digite um valor válido para o segundo X e para o Segundo Y')
        } else if(isNaN(primeiroY) && isNaN(segundoY)){
            alert('Digite um valor válido para primeiro Y e para o segundo Y')
        } else if(isNaN(primeiroX)){
            alert('Digite um valor válido para o primeiro X')
        } else if(isNaN(segundoX)){
            alert('Digite um valor válido para o segundo X')
        } else if(isNaN(primeiroY)){
            alert('Digite um valor válido para o primeiro Y')
        } else if(isNaN(segundoY)){
            alert('Digite um valor válido para o segundo Y')
        }
    } else {
        equacao1.innerHTML = primeiroY + " = " + primeiroX + "a + b";
        equacao2.innerHTML = segundoY + " = " + segundoX + "a + b"; 
        equacao1.style.margin = "10px 0px 0px 0px";
        equacao2.style.margin = "0px 0px 10px 0px";

        /* CALCULA O A*/
        calculoa = ((deltaY / deltaX) % 1 == 0 ) ?  deltaY / deltaX : deltaY + "/" + deltaX ;
        alert(deltaY / deltaX);
        /* VALIDAÇÃO PARA SIMPLIFICAR O RESULTADO DE A*/
        if(isNaN(calculoa)) {
            let simpANumerador = deltaY;
            let simpADenominador = deltaX;
            while(simpANumerador % 2 == 0 && simpADenominador % 2 == 0){
                simpANumerador = simpANumerador / 2;
                simpADenominador = simpADenominador / 2;
            }
            while(simpANumerador % 3 == 0 && simpADenominador % 3 == 0) {
                simpANumerador = simpANumerador / 3;
                simpADenominador = simpADenominador / 3;
            }
            while(simpANumerador % 5 == 0 && simpADenominador % 5 == 0) {
                simpANumerador = simpANumerador / 5;
                simpADenominador = simpADenominador / 5;
            }
            while(simpANumerador % 7 == 0 && simpADenominador % 7 == 0) {
                simpANumerador = simpANumerador / 7;
                simpADenominador = simpADenominador / 7;
            }
            if(simpADenominador < 0){
                simpANumerador = -simpANumerador;
                simpADenominador = -simpADenominador;
                calculob = simpANumerador + "/" + simpADenominador
            } else {
                calculob = simpBNumerador + "/" + simpBDenominador
            }
            calculoa = simpANumerador + "/" + simpADenominador
            valorA.innerHTML = "valor de A: " + calculoa;
        } else {
            valorA.innerHTML = "valor de A: " + calculoa;
        }

        /* CALCULA O B*/
        calculob = ((primeiroY - (deltaY / deltaX) * primeiroX ) % 1 == 0) ? (primeiroY - (deltaY / deltaX) * primeiroX ) : (deltaX * primeiroY - deltaY * primeiroX) + "/" + deltaX;
        
        if(isNaN(calculob)) {
            let simpBNumerador = deltaX * primeiroY - deltaY * primeiroX;
            let simpBDenominador = deltaX;
            while(simpBNumerador % 2 == 0 && simpBDenominador % 2 == 0){
                simpBNumerador = simpBNumerador / 2;
                simpBDenominador = simpBDenominador / 2;
            }
            while(simpBNumerador % 3 == 0 && simpBDenominador % 3 == 0) {
                simpBNumerador = simpBNumerador / 3;
                simpBDenominador = simpBDenominador / 3;
            }
            while(simpBNumerador % 5 == 0 && simpBDenominador % 5 == 0) {
                simpBNumerador = simpBNumerador / 5;
                simpBDenominador = simpBDenominador / 5;
            }
            while(simpBNumerador % 7 == 0 && simpBDenominador % 7 == 0) {
                simpBNumerador = simpBNumerador / 7;
                simpBDenominador = simpBDenominador / 7;
            }
            if(simpBDenominador < 0){
                simpBNumerador = -simpBNumerador;
                simpBDenominador = -simpBDenominador;
                calculob = simpBNumerador + "/" + simpBDenominador
            } else {
                calculob = simpBNumerador + "/" + simpBDenominador
            }
            
            valorB.innerHTML = "valor de B: " + calculob;
        } else {
            valorB.innerHTML = "valor de B: " + calculob;
        }
        

        primeiraCoordenada.value = "(" + primeiroX + "," + primeiroY + ")";
        segundaCoordenada.value = "(" + segundoX + "," + segundoY + ")";
        equacaoTotal.innerHTML = (calculob > 0) ? "a equação ficaria: f(x) = " + calculoa + "x + " + calculob : "a equação ficaria: f(x) = " + calculoa + "x " + calculob;
        equacao.style.margin = "0px 0px 10px 0px";
    }
}

/* cálculo das coordenadas de interseção com funções de primeiro grau*/
function selectfxgx(){
    var fxgxSelect = document.querySelector('.fxgxSelect');
    var primeiroGrau = document.querySelector('.fxgxPrimeiro');
    var segundoGrau = document.querySelector('.fxgxSegundo');
    switch(fxgxSelect.value){
        case "1":
            primeiroGrau.style.display = "flex";
            segundoGrau.style.display = "none";

            break;
        case "2":
            segundoGrau.style.display = "flex";
            primeiroGrau.style.display = "none";
            break;
        default:
            alert('Escolha uma opção válida');
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
    }
}

function fxgxPrimeiro(){
    var fxA = parseInt(document.querySelector('.fxgx-fxA').value);
    var fxB = parseInt(document.querySelector('.fxgx-fxB').value);
    var gxA = parseInt(document.querySelector('.fxgx-gxA').value);
    var gxB = parseInt(document.querySelector('.fxgx-gxB').value);
    var equacao = document.querySelector('.fxgx-equacao');
    var calculo = 0;
    var calculoX = 0;
    let calculoY = 0;
    let answer = document.querySelector('.answerfxgxPrimeiro');

    if(isNaN(fxA) || isNaN(fxB) || isNaN(gxA) || isNaN(gxB)){
        if(isNaN(fxA) && isNaN(fxB) && isNaN(gxA) && isNaN(gxB)){
            alert('Digite um valor válido para A e B de f(x) e para A e B de g(x)');
        } else if(isNaN(fxA) && isNaN(fxB) && isNaN(gxA)){
            alert('Digite um valor válido para A e B de f(x) e para A de g(x)');
        } else if(isNaN(fxA) && isNaN(fxB) && isNaN(gxB)){
            alert('Digite um valor válido para A e B de f(x) e para B de g(x)');
        } else if(isNaN(fxA) && isNaN(gxA) && isNaN(gxB)){
            alert('Digite um valor válido para A de f(x) e para A e B de g(x)');
        } else if(isNaN(fxB) && isNaN(gxA) && isNaN(gxB)){
            alert('Digite um valor válido para B de f(x) e para A e B de g(x)');
        } else if(isNaN(fxA) && isNaN(fxB)){
            alert('Digite um valor válido para A e B de f(x)');
        } else if(isNaN(fxA) && isNaN(gxA)){
            alert('Digite um valor válido para A de f(x) e para A de g(x)');
        } else if(isNaN(fxA) && isNaN(gxB)){
            alert('Digite um valor válido para A de f(x) e para B de g(x)');
        } else if(isNaN(fxB) && isNaN(gxA)){
            alert('Digite um valor válido para B de f(x) e para A de g(x)');
        } else if(isNaN(fxB) && isNaN(gxB)){
            alert('Digite um valor válido para B de f(x) e para B de g(x)');
        } else if(isNaN(fxA)){
            alert('Digite um valor válido para A de f(x)');
        } else if(isNaN(fxB)){
            alert('Digite um valor válido para B de f(x)');
        } else if(isNaN(gxA)){
            alert('Digite um valor válido para A de g(x)');
        } else if(isNaN(gxB)){
            alert('Digite um valor válido para B de g(x)');
        } else if(fxA === gxA){
            alert('O X dará 0');
        }
    } else {
        equacao.innerHTML = "a equação é: " + fxA + "x + " + fxB + " = " + gxA + "x + " + gxB;
        calculo = fxA - gxA;
        calculoX = ((-fxB + gxB) / calculo % 1 == 0) ? (-fxB + gxB) / calculo : -fxB + gxB + "/" + calculo;
        if(isNaN(calculoX)){
            let simpXNumerador = -fxB + gxB;
            let simpXDenominador = calculo;
            while(simpXNumerador % 2 == 0 && simpXDenominador % 2 == 0){
                simpXNumerador = simpXNumerador / 2;
                simpXDenominador = simpXDenominador / 2;
            }
            while(simpXNumerador % 3 == 0 && simpXDenominador % 3 == 0) {
                simpXNumerador = simpXNumerador / 3;
                simpXDenominador = simpXDenominador / 3;
            }
            while(simpXNumerador % 5 == 0 && simpXDenominador % 5 == 0) {
                simpXNumerador = simpXNumerador / 5;
                simpXDenominador = simpXDenominador / 5;
            }
            while(simpXNumerador % 7 == 0 && simpXDenominador % 7 == 0) {
                simpXNumerador = simpXNumerador / 7;
                simpXDenominador = simpXDenominador / 7;
            }
            if(simpXDenominador < 0){
                simpXNumerador = -simpXNumerador;
                simpXDenominador = -simpXDenominador;
                calculoX = simpXNumerador + "/" + simpXDenominador
            } else {
                calculoX = simpXNumerador + "/" + simpXDenominador

            }
            calculoY =  ((-fxB * fxA + gxB * fxA) +  (fxA * fxB - gxA * fxB)) / (fxA - gxA);
            answer.value = "(" + calculoX + "," + calculoY +")";
        } else {
            calculoY = fxA * calculoX + fxB;
            answer.value = "(" + calculoX + "," + calculoY + ")";
        }
    }
}