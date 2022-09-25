//agrego interes por el valor del producto y pago en cuotas

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