window.addEventListener('load', function() {

    let vardas = 'Tautvydas';
    let pavarde = 'Dulskis';
    let kursas = 1;
    let mokykla = 'KCS';
    let pazymiai = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(vardas + " " + pavarde + ' mokosi ' + mokykla + ', ' + kursas + ' kurse jo pazymiai: ', pazymiai);

    console.log('Vardas yra ' + typeof vardas);
    console.log('Pavarde yra ' + typeof pavarde);
    console.log('kursas yra ' + typeof kursas);
    console.log('Mokykla yra ' + typeof mokykla);
    console.log('Pazymiai yra ' + typeof pazymiai);

    let studentas = {
        firstName: vardas,
        lastName: pavarde,
        couse: kursas,
        school: mokykla,
        grades: pazymiai,
    };

    let studentas2 = {
        firstName: "vardas",
        lastName: "pavarde",
        couse: 2,
        school: "mokykla",
        grades: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    };

    let studentai = [
        studentas2,
        studentas2,
        studentas2,
        {
            firstName: "Jonas",
            lastName: "Jonaitis",
            couse: 3,
            school: "kita mokykla",
            grades: [9, 8, 7, 6, 5, 4],
        },
        studentas
    ];

    console.log(studentai[studentai.length - 1]);

    function spausdintiStudenta(studentas){
        console.log(studentas.firstName + " " + studentas.lastName + ' mokosi ' + studentas.couse + ', ' + studentas.school + ' kurse jo pazymiai: ', studentas.grades);
    }

    spausdintiStudenta(studentai[2])

    let A = [1,3,6,5,7,2,2,4,4,8];

    function sudeti(masyvas, tipas) {
        let masyvoIlgis = masyvas.length;
        let sumaLyg = 0;
        let sumaNelyg = 0;

        if (masyvoIlgis < 1 ){
            return 'Per mažai duomenų masyve';
        }

        for (let i = 0; masyvoIlgis > i; ++i){
            let pazymys = masyvas[i];

            if (i % 2 === 0){
                sumaLyg += pazymys;
            } else {
                sumaNelyg += pazymys;
            }
        }

        if (tipas === 'even') {
            return sumaLyg;
        }

        if (tipas === 'odd'){
            return sumaNelyg;
        }

        return 'Nenurodėte tipo (even/odd)';
    }

    console.log(A);
    console.log("Lyg", sudeti(A, 'even'));
    console.log("Nelyg", sudeti(A, 'odd'));

    function skaiciuoti() {
        let rez;

        let inputReiksme = document.getElementById('laukelis').value; // "5"

        rez = parseInt(inputReiksme) * parseInt(inputReiksme);

        window.alert(rez);
    }

    document.querySelector('[type="button"]').addEventListener("click", skaiciuoti);

});
