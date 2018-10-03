var basic = document.querySelector('.basic');
var log = document.querySelector('.log');
var potenciacao = document.querySelector('.potenciacao');
var radiciacao = document.querySelector('.radiciacao');
var primeiroGrau = document.querySelector('.primeiro-grau');
var segundoGrau = document.querySelector('.segundo-grau');
var retaCalc = document.querySelector('.retaCalc');

/* ESCOLHA DO TIPO DE CÁLCULO*/
function escolha(){
    var escolha = document.querySelector('.escolha');
    switch(escolha.value) {
        case "1":
            basic.style.display = "flex";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "2":
            potenciacao.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "3":
            radiciacao.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "4":
            log.style.display = "flex";
            basic.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "5":
            primeiroGrau.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            segundoGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "6":
            segundoGrau.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            retaCalc.style.display = "none";
            break;
        case "7":
            retaCalc.style.display = "flex";
            basic.style.display = "none";
            log.style.display = "none";
            potenciacao.style.display = "none";
            radiciacao.style.display = "none";
            primeiroGrau.style.display = "none";
            segundoGrau.style.display = "none";
            break;
        default: 
            alert('escolha uma operação válida')
            
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
            } else {
                total.value = n1 / n2;
            }
            break;
        default:
            total.value = "escolha uma operação"
    }}
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
    }
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
}