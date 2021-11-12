const registro = document.getElementById('form-register');
const errorEmpty = document.getElementById('error-empty');

const nameReg = document.getElementById('name-reg');
const nameError = document.getElementById('name-error');

const surname = document.getElementById('l-name-reg');
const surnameError = document.getElementById('lastName-error');

const email = document.getElementById('email-reg');
const emailError = document.getElementById('email-error');

const pass = document.getElementById('pass-reg');
const passError = document.getElementById('pass-error');

const pass2 = document.getElementById('pass2-reg');
const pass2Error = document.getElementById('pass2-error');

const img = document.getElementById('img-reg');
const imgError = document.getElementById('img-error');

const accept = document.getElementById('accept-reg');
const acceptError = document.getElementById('accept-error');

let regExLetter = /^[A-Z]+$/i;
let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,})+$/;
let regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/; //mayúscula, número, caracter especial, de 8 a 16 caracteres
let regExImg = /\.(jpg|jpeg|png|gif)$/;

const emailVerify = async (email) => {
    try {
        let response = await fetch(window.origin + '/api/users/emails');
        let result = await response.json();
        return result.data.includes(email);
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('load', () => {
    console.log('register.js success!');
    
    nameReg.addEventListener('blur', () => {
        switch (true) {
            case !nameReg.value.trim():
                nameError.innerText = "El nombre es obligatorio";
                nameReg.classList.add('invalid');
                nameReg.classList.remove('valid');
                break;
            
            case nameReg.value.trim().length < 2 || nameReg.value.trim().length > 50:
                nameError.innerText = "Escribe de 2 a 50 caracteres"
                nameReg.classList.add('invalid');
                nameReg.classList.remove('valid');
                break;

            case !regExLetter.test(nameReg.value.trim()):
                nameError.innerText = 'Solo caracteres alfabéticos';
                nameReg.classList.add('invalid');
                nameReg.classList.remove('valid');
                break;
        
            default:
                nameReg.classList.remove('invalid');
                nameReg.classList.add('valid');
                nameError.innerHTML = null;
                break;
        }
    })
    nameReg.addEventListener('keydown', () => {
        nameReg.classList.remove('invalid');
        nameError.innerHTML = null;
    })

    surname.addEventListener('blur', () => {
        switch (true) {
            case !surname.value.trim():
                surnameError.innerText = "El apellido es obligatorio";
                surname.classList.add('invalid');
                surname.classList.remove('valid');
                break;
            
            case surname.value.trim().length < 2 || surname.value.trim().length > 50:
                surnameError.innerText = "Escribe de 2 a 50 caracteres"
                surname.classList.add('invalid');
                surname.classList.remove('valid');
                break;

            case !regExLetter.test(surname.value.trim()):
                surnameError.innerText = 'Solo caracteres alfabéticos';
                surname.classList.add('invalid');
                surname.classList.remove('valid');
                break;
        
            default:
                surname.classList.remove('invalid');
                surname.classList.add('valid');
                surnameError.innerHTML = null;
                break;
        }
    })

    email.addEventListener('blur', async function() {
        switch (true) {
            case !regExEmail.test(email.value):
                emailError.innerText = "Debes ingresar un email válido";
                email.classList.add('invalid');
                email.classList.remove('valid');
                break;
            case await emailVerify(email.value) :
                emailError.innerText = "El email está registrado";
                email.classList.add('invalid');
                email.classList.remove('valid');
                break;
            default:
                emailError.innerHTML = null;
                email.classList.remove('invalid');
                email.classList.add('valid');
                break;
        }
    })

    pass.addEventListener('blur',() => {
        if(!regExPass.test(pass.value)){
            passError.innerText = "La contraseña debe tener una mayúscula, un número entre 8 y 16 caracteres";
            pass.classList.add('invalid');
            pass.classList.remove('valid');
        }else{
            passError.innerHTML = null;
            pass.classList.remove('invalid');
            pass.classList.add('valid');
        }
    })
    pass.addEventListener('focus',()=> {
        pass.classList.remove('invalid');
    })

    pass2.addEventListener('blur',() => {
        if(pass.value !== pass2.value){
            pass2Error.innerText = "Las contraseñas no coinciden";
            pass2.classList.add('invalid');
            pass2.classList.remove('valid');
        }else if(pass.value == ""){
            pass2Error.innerText = "Debes ingresar una contraseña";
            pass2.classList.add('invalid');
            pass2.classList.remove('valid');
        }else{
            pass2Error.innerHTML = null;
            pass2.classList.remove('invalid');
            pass2.classList.add('valid');
        }
    })
    pass2.addEventListener('focus',()=> {
        pass2.classList.remove('invalid');
    })

    img.addEventListener('change', () => {
        if (img.value) {
            if (!regExImg.test(img.value)) {
                img.classList.add('invalid');
                img.classList.remove('valid');
                imgError.innerText = "Se permiten solo imágenes .jpg, .jpeg, .png y .gif";
            }else{
                img.classList.remove('invalid');
                img.classList.add('valid');
                imgError.innerHTML = null;
            }
        }
    })

    accept.addEventListener('click', () => {
        accept.classList.toggle('valid');
        accept.classList.remove('invalid');
        acceptError.innerHTML = null;
    })

    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        let elementsForm = registro.elements;

        let error = false;

        for (let i = 0; i < elementsForm.length - 2; i++) {
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('invalid');
                errorEmpty.innerText = "Los campos señalados son obligatorios";
                error = true;
            }
        }
        if(!accept.checked) {
            accept.classList.add('invalid');
            acceptError.innerText = "Debes aceptar los términos y condiciones";
            error = true;
        }
        for (let i = 0; i < elementsForm.length - 2; i++) {
            if(elementsForm[i].classList.contains('invalid')){
                error = true;
            }
        }
        if(!error){
            errorEmpty.innerHTML = null;
            registro.submit();
        }
    });
});