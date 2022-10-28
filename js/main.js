
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

function mostrarPaz(){
    const $CardPaz = document.querySelector(".Paz");
    $CardPaz.style.setProperty("visibility","visible");
}
function ocultarPaz(){
    const $CardPaz = document.querySelector(".Paz");
    $CardPaz.style.setProperty("visibility","hidden");
}

function mostrarSonsonate(){
    const $CardSonsonate = document.querySelector(".Sonsonate");
    $CardSonsonate.style.setProperty("visibility","visible");
}
function ocultarSonsonate(){
    const $CardSonsonate = document.querySelector(".Sonsonate");
    $CardSonsonate.style.setProperty("visibility","hidden");
}

function mostrarSalvador(){
    const $CardSalvador = document.querySelector(".Salvador");
    $CardSalvador.style.setProperty("visibility","visible");
}
function ocultarSalvador(){
    const $CardSalvador = document.querySelector(".Salvador");
    $CardSalvador.style.setProperty("visibility","hidden");
}

function mostrarUnión(){
    const $CardUnión = document.querySelector(".Unión");
    $CardUnión.style.setProperty("visibility","visible");
}
function ocultarUnión(){
    const $CardUnión = document.querySelector(".Unión");
    $CardUnión.style.setProperty("visibility","hidden");
}

function mostrarMorazán(){
    const $CardMorazán = document.querySelector(".Morazán");
    $CardMorazán.style.setProperty("visibility","visible");
}
function ocultarMorazán(){
    const $CardMorazán = document.querySelector(".Morazán");
    $CardMorazán.style.setProperty("visibility","hidden");
}

function mostrarMiguel(){
    const $CardMiguel = document.querySelector(".Miguel");
    $CardMiguel.style.setProperty("visibility","visible");
}
function ocultarMiguel(){
    const $CardMiguel = document.querySelector(".Miguel");
    $CardMiguel.style.setProperty("visibility","hidden");
}

function mostrarUsulután(){
    const $CardUsulután = document.querySelector(".Usulután");
    $CardUsulután.style.setProperty("visibility","visible");
}
function ocultarUsulután(){
    const $CardUsulután = document.querySelector(".Usulután");
    $CardUsulután.style.setProperty("visibility","hidden");
}

function mostrarChalatenango(){
    const $CardChalatenango = document.querySelector(".Chalatenango");
    $CardChalatenango.style.setProperty("visibility","visible");
}
function ocultarChalatenango(){
    const $CardChalatenango = document.querySelector(".Chalatenango");
    $CardChalatenango.style.setProperty("visibility","hidden");
}

function mostrarVicente(){
    const $CardVicente = document.querySelector(".Vicente");
    $CardVicente.style.setProperty("visibility","visible");
}
function ocultarVicente(){
    const $CardVicente = document.querySelector(".Vicente");
    $CardVicente.style.setProperty("visibility","hidden");
}

function mostrarSantaAna(){
    const $CardSantaAna = document.querySelector(".SantaAna");
    $CardSantaAna.style.setProperty("visibility","visible");
}
function ocultarSantaAna(){
    const $CardSantaAna = document.querySelector(".SantaAna");
    $CardSantaAna.style.setProperty("visibility","hidden");
}



//Configuraciond de Informacion de Departamentos


function DepClean(){
    const $sliderAhuachapan = document.querySelector("#Ahuachapan");
    const $sliderTextAhuachapan = document.querySelector("#Ahuachapan-text");
    const $infoAhuachapan = document.querySelector("#info-Ahuachapan");
    const $mapaAhuachapan = document.querySelector("#mapa-Ahuachapan");
    const $imgAhuachapan = document.querySelector("#img-Ahuachapan");
    $sliderAhuachapan.style.setProperty("display","none");
    $sliderTextAhuachapan.style.setProperty("display","none");
    $infoAhuachapan.style.setProperty("display","none");
    $mapaAhuachapan.style.setProperty("display","none");
    $imgAhuachapan.style.setProperty("display","none");

    const $sliderPaz = document.querySelector("#Paz");
    const $sliderTextPaz = document.querySelector("#Paz-text");
    const $infoPaz = document.querySelector("#info-Paz");
    const $mapaPaz = document.querySelector("#mapa-Paz");
    const $imgPaz = document.querySelector("#img-Paz");
    $sliderPaz.style.setProperty("display","none");
    $sliderTextPaz.style.setProperty("display","none");
    $infoPaz.style.setProperty("display","none");
    $mapaPaz.style.setProperty("display","none");
    $imgPaz.style.setProperty("display","none");
    
    
    const $sliderCabañas = document.querySelector("#Cabañas");
    const $sliderTextCabañas = document.querySelector("#Cabañas-text");
    const $infoCabañas = document.querySelector("#info-Cabañas");
    const $mapaCabañas = document.querySelector("#mapa-Cabañas");
    const $imgCabañas = document.querySelector("#img-Cabañas");
    $sliderCabañas.style.setProperty("display","none");
    $sliderTextCabañas.style.setProperty("display","none");
    $infoCabañas.style.setProperty("display","none");
    $mapaCabañas.style.setProperty("display","none");
    $imgCabañas.style.setProperty("display","none");
    
    const $sliderLibertad = document.querySelector("#Libertad");
    const $sliderTextLibertad = document.querySelector("#Libertad-text");
    const $infoLibertad = document.querySelector("#info-Libertad");
    const $mapaLibertad = document.querySelector("#mapa-Libertad");
    const $imgLibertad = document.querySelector("#img-Libertad");
    $sliderLibertad.style.setProperty("display","none");
    $sliderTextLibertad.style.setProperty("display","none");
    $infoLibertad.style.setProperty("display","none");
    $mapaLibertad.style.setProperty("display","none");
    $imgLibertad.style.setProperty("display","none");
    
    const $sliderSonsonate = document.querySelector("#Sonsonate");
    const $sliderTextSonsonate = document.querySelector("#Sonsonate-text");
    const $infoSonsonate = document.querySelector("#info-Sonsonate");
    const $mapaSonsonate = document.querySelector("#mapa-Sonsonate");
    const $imgSonsonate = document.querySelector("#img-Sonsonate");
    $sliderSonsonate.style.setProperty("display","none");
    $sliderTextSonsonate.style.setProperty("display","none");
    $infoSonsonate.style.setProperty("display","none");
    $mapaSonsonate.style.setProperty("display","none");
    $imgSonsonate.style.setProperty("display","none");
    
    const $sliderSalvador = document.querySelector("#Salvador");
    const $sliderTextSalvador = document.querySelector("#Salvador-text");
    const $infoSalvador = document.querySelector("#info-Salvador");
    const $mapaSalvador = document.querySelector("#mapa-Salvador");
    const $imgSalvador = document.querySelector("#img-Salvador");
    $sliderSalvador.style.setProperty("display","none");
    $sliderTextSalvador.style.setProperty("display","none");
    $infoSalvador.style.setProperty("display","none");
    $mapaSalvador.style.setProperty("display","none");
    $imgSalvador.style.setProperty("display","none");
    
    const $sliderUnion = document.querySelector("#Union");
    const $sliderTextUnion = document.querySelector("#Union-text");
    const $infoUnion = document.querySelector("#info-Union");
    const $mapaUnion = document.querySelector("#mapa-Union");
    const $imgUnion = document.querySelector("#img-Union");
    $sliderUnion.style.setProperty("display","none");
    $sliderTextUnion.style.setProperty("display","none");
    $infoUnion.style.setProperty("display","none");
    $mapaUnion.style.setProperty("display","none");
    $imgUnion.style.setProperty("display","none");
    
    const $sliderMiguel = document.querySelector("#Miguel");
    const $sliderTextMiguel = document.querySelector("#Miguel-text");
    const $infoMiguel = document.querySelector("#info-Miguel");
    const $mapaMiguel = document.querySelector("#mapa-Miguel");
    const $imgMiguel = document.querySelector("#img-Miguel");
    $sliderMiguel.style.setProperty("display","none");
    $sliderTextMiguel.style.setProperty("display","none");
    $infoMiguel.style.setProperty("display","none");
    $mapaMiguel.style.setProperty("display","none");
    $imgMiguel.style.setProperty("display","none");
    
    const $sliderVicente = document.querySelector("#Vicente");
    const $sliderTextVicente = document.querySelector("#Vicente-text");
    const $infoVicente = document.querySelector("#info-Vicente");
    const $mapaVicente = document.querySelector("#mapa-Vicente");
    const $imgVicente = document.querySelector("#img-Vicente");
    $sliderVicente.style.setProperty("display","none");
    $sliderTextVicente.style.setProperty("display","none");
    $infoVicente.style.setProperty("display","none");
    $mapaVicente.style.setProperty("display","none");
    $imgVicente.style.setProperty("display","none");
    
    const $sliderChalatenango = document.querySelector("#Chalatenango");
    const $sliderTextChalatenango = document.querySelector("#Chalatenango-text");
    const $infoChalatenango = document.querySelector("#info-Chalatenango");
    const $mapaChalatenango = document.querySelector("#mapa-Chalatenango");
    const $imgChalatenango = document.querySelector("#img-Chalatenango");
    $sliderChalatenango.style.setProperty("display","none");
    $sliderTextChalatenango.style.setProperty("display","none");
    $infoChalatenango.style.setProperty("display","none");
    $mapaChalatenango.style.setProperty("display","none");
    $imgChalatenango.style.setProperty("display","none");
    
    const $sliderSantaAna = document.querySelector("#SantaAna");
    const $sliderTextSantaAna = document.querySelector("#SantaAna-text");
    const $infoSantaAna = document.querySelector("#info-SantaAna");
    const $mapaSantaAna = document.querySelector("#mapa-SantaAna");
    const $imgSantaAna = document.querySelector("#img-SantaAna");
    $sliderSantaAna.style.setProperty("display","none");
    $sliderTextSantaAna.style.setProperty("display","none");
    $infoSantaAna.style.setProperty("display","none");
    $mapaSantaAna.style.setProperty("display","none");
    $imgSantaAna.style.setProperty("display","none");
    
    const $sliderCuscatlan = document.querySelector("#Cuscatlan");
    const $sliderTextCuscatlan = document.querySelector("#Cuscatlan-text");
    const $infoCuscatlan = document.querySelector("#info-Cuscatlan");
    const $mapaCuscatlan = document.querySelector("#mapa-Cuscatlan");
    const $imgCuscatlan = document.querySelector("#img-Cuscatlan");
    $sliderCuscatlan.style.setProperty("display","none");
    $sliderTextCuscatlan.style.setProperty("display","none");
    $infoCuscatlan.style.setProperty("display","none");
    $mapaCuscatlan.style.setProperty("display","none");
    $imgCuscatlan.style.setProperty("display","none");
    
    const $sliderUsualutan = document.querySelector("#Usualutan");
    const $sliderTextUsualutan = document.querySelector("#Usualutan-text");
    const $infoUsualutan = document.querySelector("#info-Usualutan");
    const $mapaUsualutan = document.querySelector("#mapa-Usualutan");
    const $imgUsualutan = document.querySelector("#img-Usualutan"); 
    $sliderUsualutan.style.setProperty("display","none");
    $sliderTextUsualutan.style.setProperty("display","none");
    $infoUsualutan.style.setProperty("display","none");
    $mapaUsualutan.style.setProperty("display","none");
    $imgUsualutan.style.setProperty("display","none");
}

function DepAhuachapan(){
    DepClean();
    const $sliderAhuachapan = document.querySelector("#Ahuachapan");
    const $sliderTextAhuachapan = document.querySelector("#Ahuachapan-text");
    const $infoAhuachapan = document.querySelector("#info-Ahuachapan");
    const $mapaAhuachapan = document.querySelector("#mapa-Ahuachapan");
    const $imgAhuachapan = document.querySelector("#img-Ahuachapan");

    $sliderAhuachapan.style.setProperty("display","block");
    $sliderTextAhuachapan.style.setProperty("display","block");
    $infoAhuachapan.style.setProperty("display","block");
    $mapaAhuachapan.style.setProperty("display","block");
    $imgAhuachapan.style.setProperty("display","block");
}

function DepCabañas(){
    DepClean();
    const $sliderCabañas = document.querySelector("#Cabañas");
    const $sliderTextCabañas = document.querySelector("#Cabañas-text");
    const $infoCabañas = document.querySelector("#info-Cabañas");
    const $mapaCabañas = document.querySelector("#mapa-Cabañas");
    const $imgCabañas = document.querySelector("#img-Cabañas");

    $sliderCabañas.style.setProperty("display","block");
    $sliderTextCabañas.style.setProperty("display","block");
    $infoCabañas.style.setProperty("display","block");
    $mapaCabañas.style.setProperty("display","block");
    $imgCabañas.style.setProperty("display","block");
}

function DepLibertad(){
    DepClean();
    const $sliderLibertad = document.querySelector("#Libertad");
    const $sliderTextLibertad = document.querySelector("#Libertad-text");
    const $infoLibertad = document.querySelector("#info-Libertad");
    const $mapaLibertad = document.querySelector("#mapa-Libertad");
    const $imgLibertad = document.querySelector("#img-Libertad");

    $sliderLibertad.style.setProperty("display","block");
    $sliderTextLibertad.style.setProperty("display","block");
    $infoLibertad.style.setProperty("display","block");
    $mapaLibertad.style.setProperty("display","block");
    $imgLibertad.style.setProperty("display","block");
}

function DepSonsonate(){
    DepClean();
    const $sliderSonsonate = document.querySelector("#Sonsonate");
    const $sliderTextSonsonate = document.querySelector("#Sonsonate-text");
    const $infoSonsonate = document.querySelector("#info-Sonsonate");
    const $mapaSonsonate = document.querySelector("#mapa-Sonsonate");
    const $imgSonsonate = document.querySelector("#img-Sonsonate");

    $sliderSonsonate.style.setProperty("display","block");
    $sliderTextSonsonate.style.setProperty("display","block");
    $infoSonsonate.style.setProperty("display","block");
    $mapaSonsonate.style.setProperty("display","block");
    $imgSonsonate.style.setProperty("display","block");
}

function DepSalvador(){
    DepClean();
    const $sliderSalvador = document.querySelector("#Salvador");
    const $sliderTextSalvador = document.querySelector("#Salvador-text");
    const $infoSalvador = document.querySelector("#info-Salvador");
    const $mapaSalvador = document.querySelector("#mapa-Salvador");
    const $imgSalvador = document.querySelector("#img-Salvador");

    $sliderSalvador.style.setProperty("display","block");
    $sliderTextSalvador.style.setProperty("display","block");
    $infoSalvador.style.setProperty("display","block");
    $mapaSalvador.style.setProperty("display","block");
    $imgSalvador.style.setProperty("display","block");
}

function DepUnion(){
    DepClean();
    const $sliderUnion = document.querySelector("#Union");
    const $sliderTextUnion = document.querySelector("#Union-text");
    const $infoUnion = document.querySelector("#info-Union");
    const $mapaUnion = document.querySelector("#mapa-Union");
    const $imgUnion = document.querySelector("#img-Union");

    $sliderUnion.style.setProperty("display","block");
    $sliderTextUnion.style.setProperty("display","block");
    $infoUnion.style.setProperty("display","block");
    $mapaUnion.style.setProperty("display","block");
    $imgUnion.style.setProperty("display","block");
}

function DepMiguel(){
    DepClean();
    const $sliderMiguel = document.querySelector("#Miguel");
    const $sliderTextMiguel = document.querySelector("#Miguel-text");
    const $infoMiguel = document.querySelector("#info-Miguel");
    const $mapaMiguel = document.querySelector("#mapa-Miguel");
    const $imgMiguel = document.querySelector("#img-Miguel");

    $sliderMiguel.style.setProperty("display","block");
    $sliderTextMiguel.style.setProperty("display","block");
    $infoMiguel.style.setProperty("display","block");
    $mapaMiguel.style.setProperty("display","block");
    $imgMiguel.style.setProperty("display","block");
}

function DepVicente(){
    DepClean();
    const $sliderVicente = document.querySelector("#Vicente");
    const $sliderTextVicente = document.querySelector("#Vicente-text");
    const $infoVicente = document.querySelector("#info-Vicente");
    const $mapaVicente = document.querySelector("#mapa-Vicente");
    const $imgVicente = document.querySelector("#img-Vicente");

    $sliderVicente.style.setProperty("display","block");
    $sliderTextVicente.style.setProperty("display","block");
    $infoVicente.style.setProperty("display","block");
    $mapaVicente.style.setProperty("display","block");
    $imgVicente.style.setProperty("display","block");
}

function DepChalatenango(){
    DepClean();
    const $sliderChalatenango = document.querySelector("#Chalatenango");
    const $sliderTextChalatenango = document.querySelector("#Chalatenango-text");
    const $infoChalatenango = document.querySelector("#info-Chalatenango");
    const $mapaChalatenango = document.querySelector("#mapa-Chalatenango");
    const $imgChalatenango = document.querySelector("#img-Chalatenango");

    $sliderChalatenango.style.setProperty("display","block");
    $sliderTextChalatenango.style.setProperty("display","block");
    $infoChalatenango.style.setProperty("display","block");
    $mapaChalatenango.style.setProperty("display","block");
    $imgChalatenango.style.setProperty("display","block");
}

function DepCuscatlan(){
    DepClean();
    const $sliderCuscatlan = document.querySelector("#Cuscatlan");
    const $sliderTextCuscatlan = document.querySelector("#Cuscatlan-text");
    const $infoCuscatlan = document.querySelector("#info-Cuscatlan");
    const $mapaCuscatlan = document.querySelector("#mapa-Cuscatlan");
    const $imgCuscatlan = document.querySelector("#img-Cuscatlan");

    $sliderCuscatlan.style.setProperty("display","block");
    $sliderTextCuscatlan.style.setProperty("display","block");
    $infoCuscatlan.style.setProperty("display","block");
    $mapaCuscatlan.style.setProperty("display","block");
    $imgCuscatlan.style.setProperty("display","block");
}

function DepUsualutan(){
    DepClean();
    const $sliderUsualutan = document.querySelector("#Usualutan");
    const $sliderTextUsualutan = document.querySelector("#Usualutan-text");
    const $infoUsualutan = document.querySelector("#info-Usualutan");
    const $mapaUsualutan = document.querySelector("#mapa-Usualutan");
    const $imgUsualutan = document.querySelector("#img-Usualutan");

    $sliderUsualutan.style.setProperty("display","block");
    $sliderTextUsualutan.style.setProperty("display","block");
    $infoUsualutan.style.setProperty("display","block");
    $mapaUsualutan.style.setProperty("display","block");
    $imgUsualutan.style.setProperty("display","block");
}

function DepPaz(){
    DepClean();
    const $sliderPaz = document.querySelector("#Paz");
    const $sliderTextPaz = document.querySelector("#Paz-text");
    const $infoPaz = document.querySelector("#info-Paz");
    const $mapaPaz = document.querySelector("#mapa-Paz");
    const $imgPaz = document.querySelector("#img-Paz");

    $sliderPaz.style.setProperty("display","block");
    $sliderTextPaz.style.setProperty("display","block");
    $infoPaz.style.setProperty("display","block");
    $mapaPaz.style.setProperty("display","block");
    $imgPaz.style.setProperty("display","block");
}