const modeToggle = document.getElementById('mode_toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme')
    }
});