let profile = document.getElementById('form-profile');
let profileError = document.getElementById('error-empty-upd');

let nameUpd = document.getElementById('name-upd');
let nameUpdError = document.getElementById('name-upd-error');

let surnameUpd = document.getElementById('surname-upd');
let surnameUpdError = document.getElementById('surname-upd-error');

let emailUpd = document.getElementById('emailUpd-upd');
let emailUpdError = document.getElementById('emailUpd-upd-error');

let oldPass = document.getElementById('oldPass');
let oldPassError = document.getElementById('oldPass-error');

let passUpd = document.getElementById('passUpd-upd');
let passUpdError = document.getElementById('passUpd-upd-error');

let pass2Upd = document.getElementById('pass2-upd');
let pass2UpdError = document.getElementById('pass2-upd-error');

let imgUpd = document.getElementById('img-upd');
let imgUpdError = document.getElementById('img-upd-error');

window.addEventListener("load", () => {
    console.log('profile.js success!');

    nameUpd.addEventListener('blur', () => {
        switch (true) {
            
            case nameUpd.value.trim().length < 2 || nameUpd.value.trim().length > 50:
                nameUpdError.innerText = "Escribe de 2 a 50 caracteres"
                nameUpd.classList.add('invalid');
                nameUpd.classList.remove('valid');
                break;

            case !regExLetter.test(nameUpd.value.trim()):
                nameUpdError.innerText = 'Solo caracteres alfabéticos';
                nameUpd.classList.add('invalid');
                nameUpd.classList.remove('valid');
                break;
        
            default:
                nameUpd.classList.remove('invalid');
                nameUpd.classList.add('valid');
                nameUpdError.innerHTML = null;
                break;
        }
    })

    surnameUpd.addEventListener('blur', () => {
        switch (true) {
            
            case surnameUpd.value.trim().length < 2 || surnameUpd.value.trim().length > 50:
                surnameUpdError.innerText = "Escribe de 2 a 50 caracteres"
                surnameUpd.classList.add('invalid');
                surnameUpd.classList.remove('valid');
                break;

            case !regExLetter.test(surnameUpd.value.trim()):
                surnameUpdError.innerText = 'Solo caracteres alfabéticos';
                surnameUpd.classList.add('invalid');
                surnameUpd.classList.remove('valid');
                break;
        
            default:
                surnameUpd.classList.remove('invalid');
                surnameUpd.classList.add('valid');
                surnameUpdError.innerHTML = null;
                break;
        }
    })

    /* passUpd.addEventListener('blur',() => {
        switch (true) {
            case passUpd == "":
                passUpdError.innerHTML = null;
                passUpd.classList.remove('invalid');
                passUpd.classList.remove('valid');
                break;
            case !regExPass.test(passUpd.value):
                passUpdError.innerText = "La contraseña debe tener al menos una mayúscula, un número y un caracter especial, y ser de 8 a 16 caracteres";
                passUpd.classList.add('invalid');
                passUpd.classList.remove('valid');
                break;
            default:
                passUpdError.innerHTML = null;
                passUpd.classList.remove('invalid');
                passUpd.classList.add('valid');
                break;
        }
    })
    passUpd.addEventListener('focus',()=> {
        passUpd.classList.remove('invalid');
    }) */

    /* pass2Upd.addEventListener('blur',() => {
        if(passUpd.value !== pass2Upd.value){
            pass2UpdError.innerText = "Las contraseñas no coinciden";
            pass2Upd.classList.add('invalid');
            pass2Upd.classList.remove('valid');
        }else if(passUpd.value == ""){
            pass2UpdError.innerText = "Debes ingresar una contraseña";
            pass2Upd.classList.add('invalid');
            pass2Upd.classList.remove('valid');
        }else{
            pass2UpdError.innerHTML = null;
            pass2Upd.classList.remove('invalid');
            pass2Upd.classList.add('valid');
        }
    })
    pass2Upd.addEventListener('focus',()=> {
        pass2Upd.classList.remove('invalid');
    }) */

    imgUpd.addEventListener('change', () => {
        if (imgUpd.value) {
            if (!regExImg.test(imgUpd.value)) {
                imgUpd.classList.add('invalid');
                imgUpd.classList.remove('valid');
                imgUpdError.innerText = "Se permiten solo imágenes .jpg, .jpeg, .png y .gif";
            }else{
                imgUpd.classList.remove('invalid');
                imgUpd.classList.add('valid');
                imgUpdError.innerHTML = null;
            }
        } else{
            imgUpd.classList.remove('invalid');
        }
    })

    profile.addEventListener("submit",(e) => {
        e.preventDefault();
        profileError.innerText = 'Se precisa tu contraseña para guardar cualquier cambio';

        switch (true) {
            case oldPass == "":
                oldPassError.innerText = 'Ingrese su contraseña';
                oldPass.classList.add('invalid');
                oldPass.classList.remove('valid');
                break;
            case !regExPass.test(oldPass.value):
                oldPassError.innerText = 'Formato de contraseña inválido';
                oldPass.classList.add('invalid');
                oldPass.classList.remove('valid');
                break;
            default:
                oldPassError.innerHTML = null;
                oldPass.classList.remove('invalid');
                oldPass.classList.add('valid');
                profileError.innerHTML = null;
                profile.submit();
                break;
        }
    })
})