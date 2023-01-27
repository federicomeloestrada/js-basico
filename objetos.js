var mi_auto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function (){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

mi_auto.annio

mi_auto.detalleDelAuto();

// constructor
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto_nuevo = new auto("Tesla","Model 3", 2020);
var auto_nuevo2 = new auto("Tesls","Model X", 2018);