let style = {
    "fontSize": "24px",
    "backgroundColor": "green",
    "width": "200px",
    "height":"200px",
};

function skaiciuotiElemKieki(elem) {
    return document.querySelectorAll(elem).length;
}

function generuotiAtsakyma(kiekis) {

    return 'Šiame puslapyje yra ' + kiekis + ' paveiksleliai';
}

function getFotos() {
    return document.querySelectorAll('img:nth-child(2n)');
}

function keistiAltTeksta() {
    for (let i = 0; i < fotos.length; ++i) {
        elem = fotos[i];
        elem.setAttribute("alt", "Testas");
    }
}

function gautiElementa(id) {
    return document.getElementById(id);
}

function ketvirtasBudas(){
    // Ketvirtas budas
    uuid.setAttribute("class", "stilius2");
}

function treciasBudas(){
    // Trecias budas
    Object.assign(uuid.style, style);
}

function antrasBudas(){
    // Antras budas
    for( let key in style ){
        uuid.style[key] = style[key]
    }
}

function pirmasBudas(){
    // Pirmas budas
    uuid.style.fontSize = '24px';
    uuid.style.backgroundColor = 'green';
    uuid.style.width = '200px';
    uuid.style.height = '200px';
}
function spausdintiTeksta(kur, ka) {
    kur.innerHTML = ka;
}

// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************

let imgKiekis = skaiciuotiElemKieki('img');
let kiekText = generuotiAtsakyma(imgKiekis);
let fotos = getFotos();
let uuid = gautiElementa('uuid');
let uuid2 = gautiElementa('uuid2');

keistiAltTeksta();
// pirmasBudas();
// antrasBudas();
// treciasBudas();
ketvirtasBudas();

// ********************************************************************************************************
// ********************************************************************************************************
// ********************************************************************************************************

console.log(kiekText);
spausdintiTeksta(uuid, kiekText);
spausdintiTeksta(uuid2, 'UUID 2: ' + kiekText);
