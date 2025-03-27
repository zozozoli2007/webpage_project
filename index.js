// Get the toggle button and the body element
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Check the saved theme from localStorage (if any) when the page loads
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Add event listener to toggle the dark mode
modeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class
    body.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});
