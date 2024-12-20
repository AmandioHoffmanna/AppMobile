const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links li a');
const closeBtn = document.getElementById('close-btn');

menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navLinks.classList.toggle('active');
});

navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navLinks.classList.remove('active'); 
});

document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota padrão
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.log('Falha ao registrar o Service Worker:', error);
        });
    });
  }
  