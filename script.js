function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    let isDark = document.body.classList.contains('dark-mode');
    document.documentElement.style.setProperty('--bg-color', isDark ? '#ffffff' : '#001f3f');
    document.documentElement.style.setProperty('--text-color', isDark ? '#000' : 'white');
    document.documentElement.style.setProperty('--card-bg', isDark ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)');
}

function showMessage(event) {
    event.preventDefault(); // Mencegah link untuk terbuka
    alert("Admin Males Input :v");
}

function showMessage(grup) {
    event.preventDefault(); // Mencegah link untuk terbuka
    alert("5K/DAY :v");
}
