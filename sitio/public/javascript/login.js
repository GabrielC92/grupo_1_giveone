const login = document.getElementById('form-login');
const logErrorEmpty = document.getElementById('error-empty-log');

const emailLog = document.getElementById('email-log');
const emailLogError = document.getElementById('email-log-error');

const passLog = document.getElementById('pass-log');
const passLogError = document.getElementById('pass-log-error');

let btnWatch = document.getElementById('watch');

window.addEventListener('load', () => {
    console.log('login.js success!');

    btnWatch.addEventListener("click", () => {
        if (passLog.getAttribute('type') == 'text') {
            passLog.setAttribute('type', 'password');
        } else {
            passLog.setAttribute('type', 'text');
        }
    })
    emailLog.addEventListener('blur', async function() {
            switch (true) {
                case !regExEmail.test(emailLog.value):
                    emailLogError.innerText = "Tiene que ingresar un email válido";
                    emailLog.classList.add('invalid');
                    emailLog.classList.remove('valid');
                    break;
                case await emailVerify(emailLog.value):
                    emailLogError.innerHTML = null;
                    emailLog.classList.remove('invalid');
                    emailLog.classList.add('valid');
                    break;
                default:
                    emailLogError.innerText = 'No estás registrado, haz clic en "Registrate"';
                    emailLog.classList.add('invalid');
                    emailLog.classList.remove('valid');
                    break;
            }
        })
    emailLog.addEventListener('focus', () => {
            emailLogError.innerHTML = null;
            emailLog.classList.remove('invalid');
            emailLog.classList.remove('valid');
    })

    passLog.addEventListener('blur',() => {
        switch (true) {
            case !passLog.value:
                passLogError.innerText = "La contraseña es requerida";
                passLog.classList.add('invalid');
                passLog.classList.remove('valid');
                break;
            case !regExPass.test(passLog.value):
                passLogError.innerText = "Formato de contraseña invalido";
                passLog.classList.add('invalid');
                passLog.classList.remove('valid');
                break;
            case emailLog.classList.contains('valid'):
                passLogError.innerHTML = null;
                passLog.classList.remove('invalid');
                passLog.classList.add('valid');
                break;
            default:
                passLogError.innerHTML = null;
                passLog.classList.remove('invalid');
                passLog.classList.remove('valid');
                break;
        }
    })
    passLog.addEventListener('focus',()=> {
        passLog.classList.remove('invalid');
    })

    login.addEventListener('submit', (e) => {
        e.preventDefault();
        
        //let error = false;

        if (!emailLog.classList.contains('valid') && !passLog.classList.contains('valid')) {
            logErrorEmpty.innerText = "Complete los campos para iniciar sesión";
            //error = true;
        }else{
            logErrorEmpty.innerHTML = null;
            login.submit();
        }
    })
})