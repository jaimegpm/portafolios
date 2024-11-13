document.addEventListener("DOMContentLoaded", function () {
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const paletteIcon = document.getElementById("paletteIcon");
    const colorPicker = document.getElementById("colorPicker");

    let isDarkMode = true;

    function applyDarkMode() {
        document.documentElement.style.setProperty('--bg-color-black', '#000000');
        document.documentElement.style.setProperty('--text-color-white', '#ffffff');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    function applyLightMode() {
        document.documentElement.style.setProperty('--bg-color-black', '#ffffff');
        document.documentElement.style.setProperty('--text-color-white', '#000000');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    moonIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });

    sunIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });

    colorPicker.addEventListener("input", function () {
        const selectedColor = this.value;
        document.documentElement.style.setProperty('--main-color', selectedColor);
        sunIcon.setAttribute("fill", selectedColor);
        moonIcon.setAttribute("fill", selectedColor);
        paletteIcon.setAttribute("fill", selectedColor);
    });

    applyDarkMode();
});

document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll('.timeline li');

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.6
    });

    timelineEvents.forEach(event => {
        observer.observe(event);
    });
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});