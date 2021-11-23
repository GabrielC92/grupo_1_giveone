import Swal from 'sweetalert2/dist/sweetalert2.js'
let productDelete = document.getElementById('product-delete');

console.log('productDelete.js success!');

productDelete.addEventListener("submit", e => {
  e.preventDefault();
  Swal.fire({
      title: '¿Estás seguro de borrar este producto?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El producto fue eliminado de la base de datos.',
          'success'
        )
        productDelete.submit();
      }
    })
})
