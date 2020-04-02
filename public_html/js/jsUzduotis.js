let kiekis = document.querySelectorAll('img').length;
let kiekText = 'Šiame puslapyje yra ' + kiekis + ' paveiksleliai';

console.log(kiekText);

document.getElementById('uuid').innerHTML = kiekText;

let fotos = document.querySelectorAll('img:nth-child(2n)');

for (let i = 0; i < fotos.length; ++i) {
    elem = fotos[i];
    elem.setAttribute("alt", "Testas");
}

let uuid = document.getElementById('uuid');
let style = {
    "fontSize": "24px",
    "backgroundColor": "green",
    "width": "200px",
    "height":"200px",
};

// Pirmas budas
// uuid.style.fontSize = '24px';
// uuid.style.backgroundColor = 'green';
// uuid.style.width = '200px';
// uuid.style.height = '200px';

// Antras budas
// for( let key in style ){
//     uuid.style[key] = style[key]
// }

// Trecias budas
// Object.assign(uuid.style, style);

// Ketvirtas budas
uuid.setAttribute("class", "stilius2");
