const registro = document.getElementById('form-register');
const name = document.getElementById('name-reg');
const lastName = document.getElementById('l-name-reg');
const email = document.getElementById('email-reg');
const pass = document.getElementById('pass-reg');
const pass2 = document.getElementById('pass2-reg');
const img = document.getElementById('img-reg');
const accept = document.getElementById('accept-reg');

window.addEventListener('load', () => {
    console.log('registerFront.js success!');
    registro.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});