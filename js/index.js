const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en zapatillas.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaZapatilla = document.createElement("div");
    nuevaZapatilla.classList = "tarjeta-producto"
    nuevaZapatilla.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Zapatilla 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button type="button" class="button">
  <span class="button__text">Agregar</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>`
    contenedorTarjetas.appendChild(nuevaZapatilla);
    nuevaZapatilla.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
  });
}

crearTarjetasProductosInicio(zapatillas);
