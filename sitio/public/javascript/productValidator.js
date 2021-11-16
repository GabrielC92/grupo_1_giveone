const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ0-9\s]{5,30}$/, // Letras, pueden llevar acentos, y numeros.
	nombreEdit :/^[a-zA-ZÀ-ÿ0-9\s]{5,30}$/,
	descripcion:/^.{20,500}$/, // Letras, pueden llevar acentos.
};

const campos = [
	nombre = false,
	descripcion = false,
	imagen = false 
]

validarFormulario = (e) => {
	switch	(e.target.name) {
		case  "name":
			if (expresiones.nombre.test(e.target.value)) {
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-check-circle')
				document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle')
				document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo')
				campos['nombre'] = true;
			} else{
				document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__nombre i').classList.add('fa-times-circle')
				document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle')
				document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo')

				campos['nombre'] = false
			}
		break;
		case  "description":
			if (expresiones.descripcion.test(e.target.value)) {
				document.getElementById('grupo__descripcion').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__descripcion').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__descripcion i').classList.add('fa-check-circle')
				document.querySelector('#grupo__descripcion i').classList.remove('fa-times-circle')
				document.querySelector('#grupo__descripcion .formulario__input-error').classList.remove('formulario__input-error-activo')
				campos['descripcion'] = true;
			} else{
				document.getElementById('grupo__descripcion').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__descripcion').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__descripcion i').classList.add('fa-times-circle')
				document.querySelector('#grupo__descripcion i').classList.remove('fa-check-circle')
				document.querySelector('#grupo__descripcion .formulario__input-error').classList.add('formulario__input-error-activo')

				campos['descripcion'] = false
			}
		
			break;
		case  "image":
			if (e.target.files.length <= 5 && e.target.files.length > 0) {
				document.getElementById('grupo__imagen').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__imagen').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__imagen i').classList.add('fa-check-circle')
				document.querySelector('#grupo__imagen i').classList.remove('fa-times-circle')
				document.querySelector('#grupo__imagen .formulario__input-error').classList.remove('formulario__input-error-activo')
				
				campos['imagen'] = true;
			} else {
				document.getElementById('grupo__imagen').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__imagen').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__imagen i').classList.add('fa-times-circle')
				document.querySelector('#grupo__imagen i').classList.remove('fa-check-circle')
				document.querySelector('#grupo__imagen .formulario__input-error').classList.add('formulario__input-error-activo')

				campos['imagen'] = false
			}
			console.log(e.target.files.length);
		
		break;
	}
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
	input.addEventListener('mousemove', validarFormulario);
});

textarea.forEach((txtarea) => {
	txtarea.addEventListener('keyup', validarFormulario);
	txtarea.addEventListener('blur', validarFormulario);
	txtarea.addEventListener('mousemove', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.nombre && campos.descripcion) {
		formulario.submit()
	}else{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
})


