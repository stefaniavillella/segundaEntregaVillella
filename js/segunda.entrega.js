
//CLASES PRODUCTOS

class niñas {
    constructor(categoria, foto, nombre, detalle, precio, id){
        this.categoria = categoria;
        this.foto = foto;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.id = id;
    }
}

class niños {
    constructor(categoria, foto, nombre, detalle, precio, id){
        this.categoria = categoria;
        this.foto = foto;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.id = id;
    }
}


//ORDENO PRODUCTOS EN UN ARRAY 
let fotos = "./img/"
const listaProductos = [
                  new niñas ("niñas", fotos+"productoNubes.jpg", "Nube romántica", "Kit cumpleaños color pastel", 500 , "nube"),
                  new niñas ("niñas", fotos+"productoUnicornio.jpg", "Unicornio flores", "Kit romántico color pastel", 400 , "unicornio"),
                  new niñas ("niñas", fotos+"productoSirenita.jpg", "Cola de sirena", "Kit dorado brillos", 550 , "sirena"),
                  new niñas ("niñas", fotos+"productoRustica.jpg", "Estilo rústico", "Kit Kraft", 600 , "rustico"),
                  new niñas ("niñas", fotos+"productoLol.jpg", "Muñecas LOL", "Kit ROSA", 500 , "lol"),
                  new niños ("niños", fotos+"productoSelva.jpg", "Animales de la Selva", "Kit selva naranja", 500 , "selva"),
                  new niños ("niños", fotos+"productoMarinero.jpg", "Marinerito", "Kit rojo y azul", 550 , "marinero"),
                  new niños ("niños", fotos+"productoAvion.jpg", "Avión Vintage", "Kit celeste y rojo", 450 , "avion"),
                  new niños ("niños", fotos+"productoBosque.jpg", "Animales del Bosque", "Kit unisex editable", 500 , "bosque"),
                ];

let carrito = [];

//CONTENEDORES
const cardArea = document.getElementById("contenedorCards");
const cartArea = document.getElementById("mostrarCarrito");

//BOTONES
const btnTodos = document.getElementById("btnTodos");
const btnNiños = document.getElementById("btnNiños");
const btnNiñas = document.getElementById("btnNiñas");
const btnAgregar = document.getElementById("btnAgregar");
const btnCarrito = document.getElementById("btnCarrito");



// FUNCIONES DE FILTROS
function mostrarTodos () {
    cardArea.innerHTML="";
    const listaCompleta = listaProductos;

   for (let i=0; i<listaProductos.length; i++) {
       cardArea.innerHTML += generarHTML(listaCompleta[i]);
   }
    }


btnTodos.addEventListener('click',mostrarTodos);


function filtroNiños () {
    cardArea.innerHTML="";
    const listaNiños = listaProductos.filter(producto => producto.categoria == "niños");

   for (let i=0; i<listaProductos.length; i++) {
       cardArea.innerHTML += generarHTML(listaNiños[i]);
   }
    }


btnNiños.addEventListener('click',filtroNiños);


function filtroNiñas () {
    cardArea.innerHTML="";
    const listaNiñas = listaProductos.filter(producto => producto.categoria == "niñas");

   for (let i=0; i<listaProductos.length; i++) {
       cardArea.innerHTML += generarHTML(listaNiñas[i]);
   }
    }


btnNiñas.addEventListener('click',filtroNiñas);


//FUNCION PARA MODIFICAR HTML SEGUN FILTRO
function generarHTML(producto){
    html = `<div class="col-md-4 mb-3 cards__cardKit">
       <div class="cardsProducto" >
       <img src="${producto.foto}" class="card-img-top">
       <div class="card-body">
       <h5 class="card-title cards__cardTitle">${producto.nombre}</h5>
       <p class="card-text cards__cardText">${producto.detalle}</p>
       <a href="#" class="btn cards__botonCartas" id="${producto.id}">${producto.precio}</a>
       <a href="#" class="btn cards__botonCartas" id="btnAgregar">Sumar a carrito</a>
      </div>
   </div>
 </div>


 <div id="btnCarrito" class="carrito" aria-label="Abrir lista de compras" tabindex="0">
    <div class="carrito__container">
      <i class="fa-solid fa-cart-shopping" id="carrito__icon"></i>
        <p class="carrito__numero"></p>
    </div>
    <p class="carrito__total"></p>   
</div>
    `
    return (html);
}









// AGREGAR A CARRITO DE COMPRAS

//Añadir producto al carrito


cardArea.addEventListener('click',(e)=>{
    let eventoTarget = e.target;
    agregarProducto(eventoTarget.id);

    for (const producto of listaProductos){
        cartArea.innerHTML += `<div class="col-md-4 mb-3 cards__cardKit">
        <div class="cardsProducto" >
        <div class="card-body">
        <h5 id="prodCarrito">${producto.nombre}</h5>
        <a href="#"  id="${producto.id}">${producto.precio}</a>
        </div>
        </div>
        </div>
        `
    }
    
})


function agregarProducto (id){
    let productoAgregado = listaProductos.find(producto => producto.id == id);
    carrito.push(productoAgregado);
    
}

function mostrarProductosCarrito () {
    let mostrarCarrito = document.getElementById("mostrarCarrito");
    mostrarCarrito.innerHTML = "";
}





//GUARDO PRODUCTOS EN JSON 
const enJSON = JSON.stringify(listaProductos);
    console.log = enJSON;

    localStorage.setItem("listaProductos", enJSON)







    

/*function agregarProducto(e){
    e.preventDefault();
    //Delegado para agregar al carrito
    if(e.target.classList.contains('btnAgregar')){
        const producto = e.target.parentElement.parentElement;
        this.leerDatosProducto(producto);
    }
    console.log(producto);
}

btnAgregar.addEventListener('click', (e)=>{cartArea.agregarProducto(e)});
*/




/*
const botonesAgregar = document.querySelectorAll('.btnAgregar');
botonesAgregar.forEach((botonAdd) => {
  botonAdd.addEventListener('click', addToCartClicked);
});


const contenedorCarrito = document.querySelector('.mostrarCarrito');

function addToCartClicked(event) {
  const button = event.target;
  const card = button.closest('.cards');

  const cardNombre = card.querySelector('.card-title').textContent;
  const cardPrecio = card.querySelector('.precio').textContent;

  addItemToShoppingCart(cardNombre, cardPrecio);
}

function addItemToShoppingCart(cardNombre, cardPrecio) {
  const nombres = contenedorCarrito.getElementsByClassName('nombreProd');

  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].innerText === cardNombre) {
      let elementQuantity = nombres[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    }
  }

  const mostrarCarrito = document.createElement('div');
  const contenedorCarrito = `
  <div class="row nombreProd">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <h6 class="shopping-cart-item-title nombreProd text-truncate ml-3 mb-0">${cardNombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${cardPrecio}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  mostrarCarrito.innerHTML = contenedorCarrito;
  contenedorCarrito.append(mostrarCarrito);


}


*/









