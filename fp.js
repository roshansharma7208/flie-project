var toggleBtn = document.getElementById('themeToggle');
var savedTheme = localStorage.getItem('theme');

// Default theme is light
if (savedTheme === 'dark') {
    document.body.className = 'dark-mode';
    toggleBtn.textContent = '☀️ Light Mode';
} else {
    document.body.className = 'light-mode';
    toggleBtn.textContent = '🌙 Dark Mode';
}

toggleBtn.onclick = function () {
    if (document.body.className === 'dark-mode') {
        document.body.className = 'light-mode';
        toggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.className = 'dark-mode';
        toggleBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
};
