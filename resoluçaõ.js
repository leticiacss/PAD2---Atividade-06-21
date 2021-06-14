//questao 1
function primeiraquestao(text) {
  return 'Olá' + text + '!';
}

//questao 2
function soma(valor1, valor2){
 return valor1 + valor2; 
}

function subtraçao(valor1, valor2){
  return valor1 - valor2;
}

function multiplicaçao(valor1, valor2){
  return valor1 * valor2;
}

function divisao(valor1, valor2){
  return valor1 / valor2;
}

function calculos(valor1, valor2, callback){
  console.log(callback(valor1, valor2));
}

//questao 3
function questao3(v1, callback) {
 return function questao3_2(){
     callback(v1,v2);
 }
 var valoresexemplo = questao3(90, function (v1,v2){
    if (v1 % v2 == 0) {
        return true;
    } else {return false};
})

//questao 4
function meses(a) {
    switch (a) {
        case 1:
            return 'Janeiro';
            break;
        case 2:
            return 'Fevereiro';
            break;
        case 3:
            return 'Março';
            break;
        case 4:
            return 'Abril';
            break;
        case 5: 
            return 'Maio';
            break;
        case 6:
            return 'Junho';
            break;
        case 7:
            return 'Julho';
            break;
        case 8:
            return 'Agosto';
            break;
        case 9:
            return 'Setembro';
            break;
        case 10:
            return 'Outubro';
            break;
        case 11:
            return 'Novembro';
            break;
        case 12:
            return 'Dezembro';
            break;
        default:
            return 'ops!, valor inválido.'
            break;
    }
}

//questao 5
function maior(v1, v2) {
    if (v1 >= v2) {
        return 'O primeiro número é maior ou igual que o segundo!';
    } else {
        return 'O segundo número é maior ou igual que o primeiro!';
    }
}

function compara(v1, v2, callback) {
    return callback(v1, v2);
}
