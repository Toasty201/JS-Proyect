//agrego interes por el valor del producto y pago en cuotas

/*

let cantidad = parseInt(prompt("cuantos productos compro?"));
let valor = parseFloat(prompt("ingrese el valor del total de su compra"))

while(true){;
    if(valor != null && !isNaN(valor) && cantidad != null && !isNaN(cantidad)){
            //avanzamos con el flujo
        break;
    }else{
        alert("los productos no son validos");
        continue;
    }
}


let shinny = confirm("algun producto es shinny?");
// agregar valor adicional
function valorShinny (valor){
    if(shinny == true){
        valor = valor*0.15;
                
    }else{
        valor= valor * 0;
    }
return valor;
}

let adi = valorShinny(valor);
let adicional = adi.toFixed(2);
alert("el agregado de shinnyu es " +adicional);

// agregar iva
function ivaMas(valor){
    return (valor * 0.21);
}
let iv = ivaMas(valor);
let iva = iv.toFixed(2);

//sumatoria
function calcPrecioFinal(valor, adicional, iva){
    suma = parseInt(valor) + parseFloat(adicional) + parseFloat(iva);
    return suma;
}

let precioFinal = calcPrecioFinal(valor, adicional, iva);
alert("el precion final es de:" + precioFinal);

*/


// la idea seria ingresar a un entrenador y luego filtrar para buscarlo (a futuro no se ingresarian pokemons, porque lo tendria por la api de pokemon)

// entrenadores nuevos y ya resgistrados 

const entrenadores = ['Ash', 'Misty', 'Brook', 'Red', 'May', 'Serena', 'James'];
let nuevo =  prompt("Es nuevo? Anótese!!");

while (nuevo != '0'){
    entrenadores.push(nuevo);
    nuevo = prompt("Es nuevo? Anótese!!");
}
for (let registro = 0; registro < entrenadores.length; registro++) {  //aplico el for para mostrar la lsita otra vez. Limpiar consola
    console.log("Numero de entrenador registrado: " + registro + " Entrenador:  " + entrenadores[registro]);
}

// Pokemons
class Pokemon {
    constructor(nombre, tipo, subtipo, evoluciona) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.subtipo = subtipo;
        this.evoluciona = evoluciona;
    }
}

const pokemons = []; //es una constante, siempre va a estar disponible
pokemons.push(new Pokemon ("Trapinch", "Tierra", null, true));
pokemons.push(new Pokemon ("Ribombee", "Bicho", "Hada", false));
pokemons.push(new Pokemon ("Lapras", "Agua", "Hielo", false));
pokemons.push(new Pokemon ("Eevee", "Normal", null, true));
pokemons.push(new Pokemon ("Zeraora", "Electrico", null, false));
pokemons.push(new Pokemon ("Torchic", "Fuego", null, true));
pokemons.push(new Pokemon ("Tentacool", "Agua", "Veneno", true));
pokemons.push(new Pokemon ("Pikachu", "Electrico", null, true));

console.log(pokemons);


function filtro(tipo) { // le paso el valor que quiero filtrar
    return pokemons.filter(objeto => objeto.tipo == tipo);
}

function lista(pokemons) {
    let lista = '';
    pokemons.map(valor => {
        lista += 'Nombre: ' + valor.nombre + '\n'+ ' Tipo: ' + valor.tipo +  '\n' +' Subtipo: ' + valor.subtipo + '\n' + 'Evoluciona: ' + valor.evoluciona + '\n'
    });
   /* 
   for (const valor of pokemons) {
        lista += 'Nombre: ' + valor.nombre + '\n'+ ' Tipo: ' + valor.tipo +  '\n' +' Subtipo: ' + valor.subtipo + '\n' + 'Evoluciona: ' + valor.evoluciona + '\n'
    }*/
    return lista;
}




for (let index = 0; index < 2; index++) {
    let filtrado = filtro(prompt('Ingrese el tipo:'));
    if (filtrado.length > 0) {
        alert(lista(filtrado));
    } else {
        alert('No tenemos este tipo');
    }
}



