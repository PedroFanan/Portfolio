document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var mailtoLink = 'mailto:PedroHFanan@hotmail.com' +
                     '?subject=' + encodeURIComponent('Novo contato via formulário de contato') +
                     '&body=' + encodeURIComponent('Nome: ' + nome + '\n' +
                                                    'Email: ' + email + '\n' +
                                                    'Mensagem:\n' + mensagem);

    window.location.href = mailtoLink;

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
});