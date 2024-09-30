const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links li a');
const closeBtn = document.getElementById('close-btn');

// Alterna o menu ao clicar no ícone
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede o clique de se propagar e fechar o menu ao clicar no ícone
    navLinks.classList.toggle('active');
});

// Fecha o menu quando qualquer link for clicado
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Fecha o menu ao clicar no botão "X"
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique no "X" feche o menu ao clicar fora
    navLinks.classList.remove('active'); // Fecha o menu
});

// Rolar para o topo quando clicar no logo
document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll suave
    });
});
