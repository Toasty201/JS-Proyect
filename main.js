
const sala = document.querySelector('.sala');
const asientos = document.querySelectorAll('.row .asiento:not(.ocupado');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelec = document.getElementById('pelicula');
let precioEntrada = +peliculaSelec.value;
console.log(typeof precioEntrada);
recordar();


function agregar(){
    const asientoSeleccionado = document.querySelectorAll('.row .asiento.seleccionado');
    //console.log(asientoSeleccionado);

    const indexAsientos = [...asientoSeleccionado].map((asiento) => [...asientos].indexOf(asiento));
    //console.log(indexAsientos);
    localStorage.setItem('asientoSeleccionado', JSON.stringify(indexAsientos))

    const contadorAsiento = asientoSeleccionado.length;
    contador.innerText = contadorAsiento;
    total.innerText = contadorAsiento * precioEntrada;
}

function guardar(peliculaIndex, precioPelicula){ //guardo data de la peli
    localStorage.setItem('peliElegida', peliculaIndex);
    localStorage.setItem('precioElegido', precioPelicula);
}


//buscar la info del local storage y mostrar asiento ocupados
function recordar(){
    const asientoSeleccionado = JSON.parse(localStorage.getItem('asientoSeleccionado'));
    console.log(asientoSeleccionado) //se guardan!!
    
    if (asientoSeleccionado !== null && asientoSeleccionado.length >0){
        asientos.forEach((asiento,index) =>{
            if(asientoSeleccionado.indexOf(index) > -1){
                asiento.classList.add('seleccionado');
            }
        });
    }
    const peliSeleccionada = localStorage.getItem('peliElegida');
    if (peliSeleccionada !== null) {
        peliculaSelec.selectedIndex = peliSeleccionada;
      }

}

sala.addEventListener('click', (e) => {
    //console.log(e.target);
    if (e.target.classList.contains('asiento') && !e.target.classList.contains('ocupado')) {
        e.target.classList.toggle('seleccionado')
        agregar();
}});

peliculaSelec.addEventListener('change', e =>{
    precioEntrada = +e.target.value;
    console.log('valor', e.target.selectedIndex, e.target.value); //peli(numero) y precio
    guardar(e.target.selectedIndex, e.target.value);
    agregar();
});
