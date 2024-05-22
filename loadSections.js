document.addEventListener("DOMContentLoaded", () => {
    loadSection("sobre", "sobre.html");
    loadSection("projetos", "projetos.html");
    loadSection("contato", "contato.html");

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});

function loadSection(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a seção:', error));
}
