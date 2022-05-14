const url = 'http://localhost:3000/api/articulos'
const contenerdor = document.querySelector(tbody)
let resultado=''
const   modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'), options)
 const formArticulo =document.querySelector('form')
 const description = document.getElementById('Descriptions')
 const precio = document.getElementByIdr('Precio')
 const stock =document.getElementById('stock')
 let opcion = ''
 
 btnCrear.addEventListener('click' , ()=>{
     modalArticulo.show()
 })
