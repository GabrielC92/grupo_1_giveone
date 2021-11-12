const profile = document.getElementById('form-profile');
const profileError = document.getElementById('error-empty-upd');

const nameUpd = document.getElementById('name-upd');
const nameUpdError = document.getElementById('name-upd-error');

const surnameUpd = document.getElementById('surname-upd');
const surnameUpdError = document.getElementById('surname-upd-error');

const emailUpd = document.getElementById('emailUpd-upd');
const emailUpdError = document.getElementById('emailUpd-upd-error');

const oldPass = document.getElementById('oldPass');
const oldPassError = document.getElementById('oldPass-error');

const passUpd = document.getElementById('passUpd-upd');
const passUpdError = document.getElementById('passUpd-upd-error');

const pass2Upd = document.getElementById('pass2-upd');
const pass2UpdError = document.getElementById('pass2-upd-error');

const imgUpd = document.getElementById('img-upd');
const imgUpdError = document.getElementById('img-upd-error');

window.addEventListener('load', () => {
    console.log('profile.js success!');
    
    nameUpd.addEventListener('blur', () => {
        switch (true) {
            case !nameUpd.value.trim():
                nameUpdError.innerText = "El nombre es obligatorio";
                nameUpd.classList.add('invalid');
                nameUpd.classList.remove('valid');
                break;
            
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
                nameUpdError.innerText = "";
                break;
        }
    })
    nameUpd.addEventListener('keydown', () => {
        nameUpd.classList.remove('invalid');
        nameUpdError.innerText = "";
    })

    surnameUpd.addEventListener('blur', () => {
        switch (true) {
            case !surnameUpd.value.trim():
                surnameUpdError.innerText = "El apellido es obligatorio";
                surnameUpd.classList.add('invalid');
                surnameUpd.classList.remove('valid');
                break;
            
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
                surnameUpdError.innerText = "";
                break;
        }
    })

    emailUpd.addEventListener('blur', async function() {
        switch (true) {
            case !regExEmail.test(emailUpd.value):
                emailUpdError.innerText = "Ingresa un email válido";
                emailUpd.classList.add('invalid');
                emailUpd.classList.remove('valid');
                break;
            case await emailVerify(emailUpd.value) :
                emailUpdError.innerText = "El email está registrado";
                emailUpd.classList.add('invalid');
                emailUpd.classList.remove('valid');
                break;
            default:
                emailUpdError.innerText = "";
                emailUpd.classList.remove('invalid');
                emailUpd.classList.add('valid');
                break;
        }
    })

    oldPass.addEventListener('blur',() => {
        switch (true) {
            case !oldPass.value:
                oldPass.innerText = "Ingresa tu contraseña para guardar los cambios";
                oldPass.classList.add('invalid');
                oldPass.classList.remove('valid');
                break;
            case !regExPass.test(oldPass.value):
                oldPassError.innerText = "La contraseña debe tener una mayúscula, un número entre 8 y 16 caracteres";
                oldPass.classList.add('invalid');
                oldPass.classList.remove('valid');
                break;
            default:
                oldPassError.innerText = "";
                oldPass.classList.remove('invalid');
                oldPass.classList.add('valid');
                break;
        }
    })
    oldPass.addEventListener('focus',()=> {
        oldPass.classList.remove('invalid');
    })

    passUpd.addEventListener('blur',() => {
        if(!regExPass.test(passUpd.value)){
            passUpdError.innerText = "La contraseña debe tener una mayúscula, un número entre 8 y 16 caracteres";
            passUpd.classList.add('invalid');
            passUpd.classList.remove('valid');
        }else{
            passUpdError.innerText = "";
            passUpd.classList.remove('invalid');
            passUpd.classList.add('valid');
        }
    })
    passUpd.addEventListener('focus',()=> {
        passUpd.classList.remove('invalid');
    })

    pass2Upd.addEventListener('blur',() => {
        if(passUpd.value !== pass2Upd.value){
            pass2UpdError.innerText = "Las contraseñas no coinciden";
            pass2Upd.classList.add('invalid');
            pass2Upd.classList.remove('valid');
        }else if(passUpd.value == ""){
            pass2UpdError.innerText = "Debes ingresar una contraseña";
            pass2Upd.classList.add('invalid');
            pass2Upd.classList.remove('valid');
        }else{
            pass2UpdError.innerText = "";
            pass2Upd.classList.remove('invalid');
            pass2Upd.classList.add('valid');
        }
    })
    pass2Upd.addEventListener('focus',()=> {
        pass2Upd.classList.remove('invalid');
    })

    imgUpd.addEventListener('change', () => {
        if (imgUpd.value) {
            if (!regExImg.test(imgUpd.value)) {
                imgUpd.classList.add('invalid');
                imgUpd.classList.remove('valid');
                imgUpdError.innerText = "Se permiten solo imágenes .jpg, .jpeg, .png y .gif";
            }else{
                imgUpd.classList.remove('invalid');
                imgUpd.classList.add('valid');
                imgUpdError.innerHTML = "";
            }
        }
    })
    profile.addEventListener('submit', (e) => {
        e.preventDefault();

        let elementsUpdate = profile.elements;
        let errorUpdate = false;

        nameUpd.addEventListener('change', () => {
            if(!oldPass.value){
                nameUpd.classList.add('invalid');
                errorUpdate = true;
            }
        })
        surnameUpd.addEventListener('change', () => {
            if(!oldPass.value){
                surnameUpd.classList.add('invalid');
                errorUpdate = true;
            }
        })
        emailUpd.addEventListener('change', () => {
            if(!oldPass.value){
                emailUpd.classList.add('invalid');
                errorUpdate = true;
            }
        })
        oldPass.addEventListener('keydown', (event) => {
            if (!event) {
                e.preventDefault();
            }
            errorUpdate = true;
        })
        passUpd.addEventListener('change', () => {
            if(!oldPass.value){
                passUpd.classList.add('invalid');
                errorUpdate = true;
            }
        })
        imgUpd.addEventListener('change', () => {
            if(!oldPass.value){
                imgUpd.classList.add('invalid');
                errorUpdate = true;
            }
        })

        /* for (let i = 0; i < elementsUpdate.length - 2; i++) {
            if(!elementsUpdate[i].value){
                elementsUpdate[i].classList.add('invalid');
                profileError.innerText = "Los campos señalados son obligatorios";
                errorUpdate = true;
            }
        } */

        for (let i = 0; i < elementsUpdate.length - 2; i++) {
            if(elementsUpdate[i].classList.contains('invalid')){
                profileError.innerText = 'Debes cambiar como mínimo un campo para actualizar tu perfil de usuario';
                errorUpdate = true;
            }
        }
        if(!errorUpdate){
            profileError.innerHTML = null;
            profile.submit();
        }
    })
})