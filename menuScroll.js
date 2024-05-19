document.addEventListener("DOMContentLoaded", () => {
    let lastScrollTop = 0;
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-150px"; // Ajuste a altura com base na altura do seu cabeçalho
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop;
    });
});

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
