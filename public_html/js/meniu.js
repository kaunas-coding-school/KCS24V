function openPage(pageName) {
    $('nav > a').removeClass('active');
    $('main > p').css('display', 'none');
    $(pageName).css('display', 'block');
    $('[href="'+pageName+'"]').addClass('active');
}

$('nav > a').click(function () {
    let pageName = $(this).attr('href');
    openPage(pageName);
});


let hash = $(location).attr('hash');
openPage(hash);


