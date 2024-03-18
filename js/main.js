$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000');     

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required:true,
                pattern: '  ',
                minWords: 3,
            },
            email: {
                required:true,
                email: true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            endereço: {
                required:true
            },
            cep: {
                required:true
            }
        },
        messages: {
            nome: 'Insira o seu nome completo',

            email: {
                required: 'Insira o seu email'
            },

            telefone: 'Insira o seu telefone', 

            cpf: 'Insira o seu CPF',

            endereço: 'Insira o seu endereço',

            cep: 'Insira o seu CEP'
        }
    })
});