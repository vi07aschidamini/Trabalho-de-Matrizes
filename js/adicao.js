var matriz = new Array();
var matriz2 = new Array();
var numLinha = 0;
var numColunas = 0;

numLinha = parseInt(prompt("Digite o número de linhas para adição da primeira matriz: "));
numColunas = parseInt(prompt("Digite o número de colunas para adição da primeira matriz: "));

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

document.write("<p class=sinais> + </p>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

numLinha = parseInt(prompt("Digite o número de linhas para adição da segunda matriz: "));
numColunas = parseInt(prompt("Digite o número de colunas para adição da segunda matriz: "));

for (n = 0; n < numLinha; n++) {
    var temp = new Array(numColunas);
    for (p = 0; p < numColunas; p++) {
        temp[p] = parseInt(Math.random() * 100);
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

console.table(matriz2);
document.write("</table>");
document.write("<br/>");
document.write("<br/>");


document.write("<p class=sinais> = </p>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

somaLinha = [];
somaColuna = [];
somaMostrar = [];
somaMostrar2 = [];

for (i = 0; i < numLinha; i++) {
    somaMostrar.push([]);
    somaColuna.push([]);
    for (j = 0; j < numColunas; j++) {
        somaMostrar[i][j] = (matriz[i][j] + matriz2[i][j]);
    }
}

document.write("<table border=1>");
for (n = 0; n < somaMostrar.length; n++) {
    document.write("<tr>");
    for (p = 0; p < somaMostrar[n].length; p++) {
        document.write("<td>" + somaMostrar[n][p] + "</td> ");

    }
    document.write("</tr>");
}

document.write("</table>");
document.write("</div>");