// Funcionalidade de alternância de tema (Dark/Light Mode)
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há uma preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleButton.textContent = '☀️'; // Ícone para light mode
} else {
    toggleButton.textContent = '🌙'; // Ícone para dark mode
}

// Event listener para o botão de toggle
toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Salva a preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '🌙';
    }
});

// Funcionalidade para armazenar perfil ativo no localStorage
const profiles = document.querySelectorAll('.profile');

profiles.forEach(profile => {
    profile.addEventListener('click', (e) => {
        e.preventDefault();
        const img = profile.querySelector('img');
        const name = profile.querySelector('figcaption');
        
        console.log('Perfil clicado:', name.textContent, img.getAttribute('src'));
        localStorage.setItem('perfilAtivoNome', name.textContent);
        localStorage.setItem('perfilAtivoImagem', img.getAttribute('src'));
        setTimeout(() => {
            window.location.href = profile.href;
        }, 100);
    });
});