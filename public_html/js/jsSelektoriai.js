$(function () {
    // let xyz = document.getElementById('uuid');
    let xyz = $('#uuid');
    let zyx = document.getElementsByClassName('galerijos_foto')[0];
    // let abc = document.querySelectorAll('.wrapper .element')[2];
    let abc = $('.element:nth-child(3)');

    // xyz.innerHTML = 'Labas pasauli!';
    xyz.text( 'Labas pasauli!');

    zyx.src = '/img/off.png';
    // abc.style.backgroundColor = 'red';
    abc.css('background-color', 'red');
    // abc.style.display = 'block';
    abc.css('display', 'block');

    console.log(xyz.innerHTML);
    console.log(zyx.src);
    // console.log(abc.style.display);

    $('.galerijos_foto:nth-child(2n)').attr('alt', 'NEW');

    $('.galerijos_foto').click(function () {
        $('#lempute').click();
    });

    $('#lempute').click(function () {

        $('#lempute').attr('src', function (index, attr) {
            //
            // if (attr === '/img/on.png') {
            //     return '/img/off.png'
            // }else{
            //     return '/img/ofn.png'
            // }
            //
            return  attr === '/img/on.png' ? '/img/off.png' : '/img/on.png';
        } );

    });


    $('.galerijos_foto').attr('src', '/img/on.png').css('width', '50px');

});


