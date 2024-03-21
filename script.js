document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');

    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Toggle between light and dark themes
    themeToggle.addEventListener('click', function () {
        if (themeStyle.getAttribute('href') === 'style.css') {
            themeStyle.setAttribute('href', 'style-dark.css');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeStyle.setAttribute('href', 'style.css');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    })
});
