const carro = new carrito();
const mostrarCarrito = document.getElementById('mostrarCarrito');

const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presionar agregar carrito
    btnCarrito.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Cuando se elimina productos del carrito
    btnCarrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

};