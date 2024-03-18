$(document).ready(function () { 
    $('form').on('submit', function (e) {
        e.preventDefault();
        const adicionaTarefa = $('#input-tarefa').val();
        $(`<li>${adicionaTarefa}</li>`).appendTo('ul').click(()=>
        $( event.target ).toggleClass('riscado')
        );
        $('#input-tarefa').val('');
    });

});