const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle mobile menu
mobileMenu.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('open');

    // Update ARIA attributes
    mobileMenu.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

// Close menu when clicking on a link (for better UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('open');

        // Update ARIA attributes when closing
        mobileMenu.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-label', 'Open menu');

        // Remove 'active' class from all links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});