let graphicContainer = document.querySelector('.chartContainer');
let calculator = document.querySelector('.calculator');

/* CRIANDO O GRÁFICO DA EQUAÇÃO DE PRIMEIRO GRAU */

function primeiroGrauGrafico(){
    var a = parseFloat(document.querySelector('.PrimeiroGrauA').value);
    var b = parseFloat(document.querySelector('.PrimeiroGrauB').value);
    let x1 = document.querySelector('.primeiroGrauTotal').value;
    let y1 = 0;
    var x2 = (-b + 1) / a;
    var y2 = 1;
    graphicContainer.style.display = "flex";
    calculator.style.display = "none";
    let canvas = document.getElementById('canvas').getContext('2d');
    
    var chart = new Chart(canvas, {
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
    
}