//Subtração

var matriz = new Array();
var matriz2 = new Array();
var numLinha = 0;
var numColunas = 0;
var numLinha2 = 0;
var numColunas2 = 0;

numLinha = parseInt(prompt("Digite o número de linhas para multiplicação da primeira matriz: "));
numColunas = parseInt(prompt("Digite o número de colunas para multiplicação da primeira matriz: "));

for (i = 0; i < numLinha; i++) {
    var temp = new Array(numColunas);
    for (j = 0; j < numColunas; j++) {
        temp[j] = parseInt(Math.random() * 100);
    }
    matriz.push(temp);
}
console.table(matriz);

document.write("<div>");
document.write("<table border=1>");
for (i = 0; i < matriz.length; i++) {
    document.write("<tr>");
    for (j = 0; j < matriz[i].length; j++) {
        document.write("<td>" + matriz[i][j] + "</td> ");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<br/>");
document.write("<br/>");

document.write("<p class=sinais> x </p>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

numLinha2 = parseInt(prompt("Digite o número de linhas para multiplicação da segunda matriz: "));
numColunas2 = parseInt(prompt("Digite o número de colunas para multiplicação da segunda matriz: "));

for (i = 0; i < numLinha2; i++) {
    var temp = new Array(numColunas2);
    for (j = 0; j < numColunas2; j++) {
        temp[j] = parseInt(Math.random() * 100);
    }
    matriz2.push(temp);
}

document.write("<table border=1>");
for (n = 0; n < matriz2.length; n++) {
    document.write("<tr>");
    for (p = 0; p < matriz2[n].length; p++) {
        document.write("<td>" + matriz2[n][p] + "</td> ");
    }
    document.write("</tr>");
}
document.write("</table>");

console.table(matriz2);
document.write("<br/>");
document.write("<br/>");

document.write("<p class=sinais> = </p>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

var resultado = new Array();

if (numColunas == numLinha) {
    for (i = 0; i < numLinha; i++) {
        resultado[i] = new Array(numColunas2);
        for (j = 0; j < numColunas2; j++) {
            resultado[i][j] = 0;
            for (k = 0; k < numColunas; k++) {
                resultado[i][j] = matriz[i][k] * matriz2[k][j];
            }
        }
    }
} else {
    if (numColunas != numLinha2) {
        alert("Não é possível realizar esta operação, por favor recarregue a página e insira valores aceitáveis.");
    }
}

document.write("<table border=1>");
for (n = 0; n < resultado.length; n++) {
    document.write("<tr>");
    for (p = 0; p < resultado[n].length; p++) {
        document.write("<td>" + resultado[n][p] + "</td> ");
    }
    document.write("</tr>");
}
document.write("</table>");
console.log(resultado);
document.write("</div>");

