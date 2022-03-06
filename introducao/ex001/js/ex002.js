/*
    Operadores Aritméticos
+   --> Adição          ->  5 + 2 = 7
-   --> Subtração       ->  5 - 2 = 3
*   --> Multiplicação   ->  5 * 2 = 10
/   --> Divisão         ->  5 / 2 = 2.5
%   --> Resto da divisão->  5 % 2 = 1
**  --> exponenciação   ->  5 **2 = 25


    Precedência:   https://panda.ime.usp.br/cc110/static/cc110/02-expressoes.html
    Uma regra básica é que toda expressão calculada pelo computador deve sempre devolver o mesmo resultado. Por exemplo, a expressão 2 + 3 * 4 poderia devolver o valor 20 caso a soma 2+3 seja calculada antes da multiplicação.

    Exemplo:
    2 + 3 * 4 = 14
    (2 + 3) * 4 = 20
*/

// var bg = window.document.body
// Selecionando por TagName
// var tag_span = window.document.getElementById('msg')
// tag_span.style.background = 'red'
// tag_span.innerText = 'Aqui vai o js'

var tag_span = window.document.getElementById('msg').innerText = 'Nova Mensagem!'
var getDiv = window.document.querySelector('div#textMsg').innerText = 'Nova Mensagem!'
