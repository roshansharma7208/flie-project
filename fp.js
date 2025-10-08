var toggleBtn = document.getElementById('themeToggle');
var savedTheme = localStorage.getItem('theme');

// Default theme is light
if (savedTheme === 'dark') {
    document.body.className = 'dark-mode';
    toggleBtn.textContent = '☀️ ';
} else {
    document.body.className = 'light-mode';
    toggleBtn.textContent = '🌙 ';
}

toggleBtn.onclick = function () {
    if (document.body.className === 'dark-mode') {
        document.body.className = 'light-mode';
        toggleBtn.textContent = '🌙 ';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.className = 'dark-mode';
        toggleBtn.textContent = '☀️ ';
        localStorage.setItem('theme', 'dark');
    }
};

