let { fire } = require('sweetalert2');
let productDelete = document.getElementById('product-delete');

console.log('productDelete.js success!');

productDelete.addEventListener("submit", e => {
  e.preventDefault();
  fire({
      title: '¿Estás seguro de borrar este producto?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fire(
          '¡Eliminado!',
          'El producto fue eliminado de la base de datos.',
          'success'
        )
        productDelete.submit();
      }
    })
})
