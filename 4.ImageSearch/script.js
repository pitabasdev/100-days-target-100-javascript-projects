document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelector('form');
    const photo = document.querySelector('.images');
    const searchInput = document.querySelector('.search');

    forms.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('hello');
    });
});
