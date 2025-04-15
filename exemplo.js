// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send();
        
//         //https://viacep.com.br/ws/12312312/json
//     })
// })

$(document).ready(function() {
    $('#btn-buscar-cep').click(function() {
        $('#cep').mask('00000-000');

        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');

        // $.ajax(endpoint).done(function(resposta) {
        //     const logradouro = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const estado = resposta.estado;
        //     const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
        //     $('#endereco').val(endereco)

        //     setTimeout(function() {
        //         $('#btn-buscar-cep').find('i').removeClass('d-none');
        //         $('#btn-buscar-cep').find('span').addClass('d-none');
        //     },800);
        // })

        fetch(endpoint).then(function(resposta) {
            return resposta.json()
        })
        .then(function(json) {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.estado;
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        })
        .catch(function(erro) {
            alert("Ocorreu um erro, tente novamente");
        })
        .finally(function() {
            setTimeout(function() {
                $('#btn-buscar-cep').find('i').removeClass('d-none');
                $('#btn-buscar-cep').find('span').addClass('d-none');
            },800);
        })
    })

    $('#formulario-pedido').submit(function(evento) {
        evento.preventDefault();

        if ($('#nome').val().length == 0) {
            console.log('#nome')
            throw new Error('Digite o nome');
        }
    })
})