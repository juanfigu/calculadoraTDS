$(document).ready(function(){
    let clase = {
    asesino: 7,
    bardo: 7,
    cazador: 8,
    clerigo: 7,
    druida: 7,
    guerrero: 9,
    mago: 5.5,
    paladin: 8.5,

}

let raza = {
    gnomo: 0,
    elfo: 0.5,
    elfooscuro: 0.5,
    humano: 1,
    enano: 1.5,
}

let imgRazaH = {
    gnomo: "img/gnoma.png",
    elfo: "img/elfa.png",
    elfooscuro: "img/elfaoscura.png",
    humano: "img/humana.png",
    enano: "img/enana.png",
}

let imgRazaM = {
    gnomo: "img/gnomo.png",
    elfo: "img/elfo.png",
    elfooscuro: "img/elfooscuro.png",
    humano: "img/humano.png",
    enano: "img/enano.png",
}

let imgClase = {
    asesino: "img/asesino.png",
    bardo: "img/bardo.png",
    cazador: "img/cazador.png",
    clerigo: "img/clerigo.png",
    druida: "img/druida.png",
    guerrero: "img/guerrero.png",
    mago: "img/mago.png",
    paladin: "img/paladin.png",
}

let resultado;

$("#clase").change(function(){
    let claseSeleccionada = document.getElementById("clase").value;
    $("#imgClase").attr('src', imgClase[claseSeleccionada]);
    console.log()
})

$("#raza").change(function(){
    let razaSeleccionada = document.getElementById("raza").value;
    $("#masculino").attr('src', imgRazaH[razaSeleccionada]);
    $("#femenino").attr('src', imgRazaM[razaSeleccionada]);
})

$("#calcular").click(function(){
    calcular();   
})

function calcular(e){
let modificadorClase = document.getElementById("clase").value;
let modificadorRaza = document.getElementById("raza").value;
let modificadorLevel = document.getElementById("level").value;
let modificadorVida = document.getElementById("vida").value;
let vidaInicial = 0;

if(modificadorClase == "asesino"){
    vidaInicial = 30;
}  else {
    vidaInicial = clase[modificadorClase]+raza[modificadorRaza]+15;
}

let promedioIdeal = (clase[modificadorClase]+raza[modificadorRaza])*(modificadorLevel-1)+vidaInicial;

let promedioPj = modificadorVida / promedioIdeal;

let vidaUpDown = modificadorVida - promedioIdeal;

/*if(modificadorClase == "asesino"){
    promedioIdeal = (clase[modificadorClase]+raza[modificadorRaza])*(modificadorLevel-1)+30;
} else {
    promedioIdeal = (clase[modificadorClase]+raza[modificadorRaza])*modificadorLevel+15;
}

promedioPj = modificadorVida / ((clase[modificadorClase]+raza[modificadorRaza])*modificadorLevel+15);
console.log(promedioPj);*/

$("#divPromedio").html("El promedio de un " + modificadorClase + " " + modificadorRaza + " en nivel " + modificadorLevel + " es de: " + promedioIdeal + " puntos de vida.");

if(promedioPj == 1){
    $("#divResult").html("Tu personaje tiene vida promedio, sirve solo de mochi.");
} else if(promedioPj > 1){
    $("#divResult").html("Tu personaje esta arriba de vida(+" + vidaUpDown + "), bien ahi perro.");
} else if(promedioPj < 1){
    $("#divResult").html("Tu personaje esta abajo del promedio de vida("+vidaUpDown+"), felicitaciones por el tiempo que perdiste panflin");
}
document.getElementById("resultsPopup").style.visibility = "visible"
}

$("#closeBtn").click(function(){
document.getElementById("resultsPopup").style.visibility = "hidden";
})
})

