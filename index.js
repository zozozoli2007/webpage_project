const toggleButton = document.getElementById("toggle-btn");
const body = document.body;
const h2 = document.h2

// Ellenőrizzük, hogy a felhasználó már használta-e a sötét módot
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
}

// Gombra kattintva váltunk a módok között
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleButton.textContent = "☀️ Világos mód";
    } else {
        localStorage.setItem("darkMode", "disabled");
        toggleButton.textContent = "🌙 Sötét mód";
    }
});

