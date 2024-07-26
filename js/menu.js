document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuClose = document.querySelector('.menu-close');
    var menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    menuClose.addEventListener('click', function() {
        menu.classList.remove('show');
    });
});