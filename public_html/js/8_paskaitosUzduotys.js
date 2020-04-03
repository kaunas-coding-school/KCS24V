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
});
