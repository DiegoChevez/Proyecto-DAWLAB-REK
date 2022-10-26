
//Boton Hiddent
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}



function mostrarAhuachapan(){
    const $CardAhuachapan = document.querySelector(".Ahuachapan");
    $CardAhuachapan.style.setProperty("visibility","visible");
}
function ocultarAhuachapan(){
    const $CardAhuachapan = document.querySelector(".Ahuachapan");
    $CardAhuachapan.style.setProperty("visibility","hidden");
}

function mostrarCabañas(){
    const $CardCabañas = document.querySelector(".Cabañas");
    $CardCabañas.style.setProperty("visibility","visible");
}
function ocultarCabañas(){
    const $CardCabañas = document.querySelector(".Cabañas");
    $CardCabañas.style.setProperty("visibility","hidden");
}

function mostrarCuscatlán(){
    const $CardCuscatlán = document.querySelector(".Cuscatlán");
    $CardCuscatlán.style.setProperty("visibility","visible");
}
function ocultarCuscatlán(){
    const $CardCuscatlán = document.querySelector(".Cuscatlán");
    $CardCuscatlán.style.setProperty("visibility","hidden");
}

function mostrarLibertad(){
    const $CardLibertad = document.querySelector(".Libertad");
    $CardLibertad.style.setProperty("visibility","visible");
}
function ocultarLibertad(){
    const $CardLibertad = document.querySelector(".Libertad");
    $CardLibertad.style.setProperty("visibility","hidden");
}

