const form = document.getElementById('form');
const numberOne = document.getElementById('n1');
const numberTwo = document.getElementById('n2');

const mensagemError = `O valor (A) não é maior que o valor (B)`;
const mensagemSucesso = `Tudo certo ✅`;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const NumberOne = parseFloat(numberOne.value);
    const NumberTwo = parseFloat(numberTwo.value);
//Validando o form. Certo(if) , Errado(else)
    if (NumberOne > NumberTwo) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numberOne.value = '';
        numberTwo.value = '';
//Tempo da mensagem de error
        setTimeout(() => {
            containerMensagemSucesso.innerHTML = '';
        }, 3000);
        return;
        
    } else if (NumberOne <= NumberTwo) {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
//Tempo da mensagem de sucesso
        setTimeout(() => {
            containerMensagemError.innerHTML = '';
        }, 3000);
        return;
    }
});
