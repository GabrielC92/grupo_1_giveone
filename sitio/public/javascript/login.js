const login = document.getElementById('form-login');
const logErrorEmpty = document.getElementById('error-empty-log');

const emailLog = document.getElementById('email-log');
const emailLogError = document.getElementById('email-log-error');

const passLog = document.getElementById('pass-log');
const passLogError = document.getElementById('pass-log-error');

window.addEventListener('load', () => {
    console.log('login.js success!');

    emailLog.addEventListener('blur', async () => {
        switch (true) {
            case !emailLog.value:
                emailLogError.innerText = "El email registrado es requerido";
                emailLog.classList.add('invalid');
                emailLog.classList.remove('valid');
                break;
            case !regExEmail.test(emailLog.value):
                emailLogError.innerText = "Tiene que ser un email válido";
                emailLog.classList.add('invalid');
                emailLog.classList.remove('valid');
                break;
            case await emailVerify(emailLog.value):
                emailLogError.innerText = null;
                emailLog.classList.remove('invalid');
                emailLog.classList.add('valid');
                break;
            default:
                emailLogError.innerText = null;
                emailLog.classList.remove('invalid');
                break;
        }
    })
    emailLog.addEventListener('focus', () => {
            emailLogError.innerText = null;
            emailLog.classList.remove('invalid');
            emailLog.classList.remove('valid');
    })

    passLog.addEventListener('blur',() => {
        if(!passLog.value){
            passLogError.innerText = "La contraseña es requerida";
            passLog.classList.add('invalid');
            passLog.classList.remove('valid');
        }else if(!regExPass.test(passLog.value)){
            passLogError.innerText = "Formato de contraseña invalido";
            passLog.classList.add('invalid');
            passLog.classList.remove('valid');
        } else{
            passLogError.innerText = null;
            passLog.classList.remove('invalid');
            passLog.classList.add('valid');
        }
    })
    passLog.addEventListener('focus',()=> {
        passLog.classList.remove('invalid');
    })

    login.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let error = false;

        if (!emailLog.classList.contains('valid') && !passLog.classList.contains('valid')) {
            logErrorEmpty.innerText = "Complete los campos para iniciar sesión";
            error = true;
        }else{
            logErrorEmpty.innerText = null;
            login.submit();
        }
    })
})