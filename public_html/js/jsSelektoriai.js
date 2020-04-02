let xyz = document.getElementById('uuid');
let zyx = document.getElementsByClassName('galerijos_foto')[0];
let abc = document.querySelectorAll('.kita .kita_klase')[2];

xyz.innerHTML = 'Labas pasauli!';
zyx.src = '/img/off.png';
abc.style.backgroundColor = 'red';
abc.style.display = 'block';

console.log(xyz.innerHTML);
console.log(zyx.src);
console.log(abc.style.display);