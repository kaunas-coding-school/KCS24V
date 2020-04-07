$(function () {

    // function openPage(pageName) {
    //     $('nav > a').removeClass('active');
    //     $('main > p').css('display', 'none');
    //     $(pageName).css('display', 'block');
    //     $('[href="' + pageName + '"]').addClass('active');
    // }

    $('nav > a').click(function () {
        let pageName = $(this).attr('href');
        openPage(pageName);
    });

    let hash = $(location).attr('hash');
    if (typeof hash !== 'string' || hash === '') {
        hash = "home";
    }
    openPage(hash);

    // function loadJSON(callback) {
    //     var xobj = new XMLHttpRequest();
    //     xobj.overrideMimeType("application/json");
    //     xobj.open('GET', '/js/mydata.json', true); // Replace 'my_data' with the path to your file
    //     xobj.onreadystatechange = function () {
    //         if (xobj.readyState === 4 && xobj.status === 200) {
    //             callback(xobj.responseText);
    //         }
    //     };
    //     xobj.send(null);
    // }
    //
    // function openPage(pageName) {
    //
    //     pageName = pageName.replace(/[^a-zA-Z0-9]/g, '');
    //     $('nav > a').removeClass('active');
    //     $('[href="#' + pageName + '"]').addClass('active');
    //
    //     loadJSON(function (response) {
    //         let actualJSON = JSON.parse(response);
    //         let page = actualJSON[pageName];
    //
    //         document.querySelector('title').innerHTML = page.title;
    //         document.querySelector('main').innerHTML = page.content;
    //     });
    // }

    function openPage(pageName) {
        pageName = pageName.replace(/[^a-zA-Z0-9]/g, '');
        $('nav > a').removeClass('active');
        $('[href="#' + pageName + '"]').addClass('active');

        $('main').load('/js/mydata.json', function () {
            let jsonText = $(this).html();
            let jsonObj = JSON.parse(jsonText);

            let page = jsonObj[pageName];
            $('title').html(page.title);
            $(this).html(page.content);
        });
    }

    $('aside').load('/js/aside.json', function (jsonText, status, xhr) {
        if ( status === "error" ) {
           let msg = "Sorry but there was an error: ";
           console.log( msg + xhr.status + " " + xhr.statusText );
        } else {
            $(this).html('');
            let jsonObj = JSON.parse(jsonText);
            for (let i = 0; jsonObj.length > i; ++i) {
                let elem = jsonObj[i];
                $(this).append('<div data="' + elem.page + '">' + elem.title + '</div>');

                $('aside > div').click(function () {
                    let psl = $(this).attr('data');
                    $('main').load('/test/' + psl + '.html', function (response, status, xhr) {
                        if ( status === "error" ) {
                            let msg = "Sorry but there was an error: ";
                            $(this).html( msg + xhr.status + " " + xhr.statusText );
                        }
                    });
                });
            }
        }
    });
});
