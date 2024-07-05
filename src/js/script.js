// Get current year and update footer
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = `Adriaen Limborgh © ${currentYear}`;
    }
});

// Hamburger menu functionality
var hamburger = document.querySelector('.hamburger');
var menu = document.getElementById('navMenu');

if (hamburger && menu) {
    hamburger.addEventListener('click', function(event) {
        menu.classList.toggle('show');
        hamburger.classList.toggle('hide'); // Toggle the hide class on click
        event.stopPropagation(); // Prevent click event from propagating to document
    });

    // Close nav menu when a link is clicked
    menu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth <= 768) {
            menu.classList.remove('show');
        }
    });

    // Ensure nav menu is visible on larger screens after being toggled off on smaller screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('show');
            hamburger.classList.remove('hide'); // Ensure the hamburger is visible again on larger screens
        }
    });

    // Close nav menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target) && window.innerWidth <= 768) {
            menu.classList.remove('show');
            // Only hide the hamburger if the menu was shown, otherwise do nothing
            if (hamburger.classList.contains('hide')) {
                hamburger.classList.remove('hide');
            }
        }
    });
}

