const numeros = document.querySelectorAll('input[type=button]');
const tela = document.querySelector('input[type=tel]');

for (let indice = 0; indice < numeros.length; indice++) {

    const tecla = numeros[indice];
    tecla.onclick = function () {
        tela.value = tela.value + tecla.value;
    }
}
