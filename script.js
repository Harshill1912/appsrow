document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Add this CSS to style.css for the scroll effect
/*
.header.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
*/