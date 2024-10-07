const form = document.querySelector(".formulário-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function SaiaDaTela(){
    mascara.style.visibility = "hidden"
    form.style.left = "-150px"
}















/* 

    Variáveis: um espaço que você reserva 
    e pode guardar o que quiser lá dentro

    3 jeitos de criar uma variável
    - var / jeito antigo - NÃO USE 
    - let -> pode alterar o valor depois 
    - const -> constante
*/

/*

    Funções: trecho de código que só é executado quando é chamado

*/


