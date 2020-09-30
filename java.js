'use strict';

let students = [
    { 'név' : 'Tóth Balázs', 'osztály' : '14SZF' },
    { 'név' : 'Börcsök Dávid', 'osztály' : '14SZF' },
    { 'név' : 'Kiss László', 'osztály' : '14SZF' },
    { 'név' : 'Németh Christopher', 'osztály' : '14SZF' },
    { 'név' : 'Kucsera Kinga', 'osztály' : '14SZF' },
    { 'név' : 'Visnyei Ádám', 'osztály' : '14SZF' },
    { 'név' : 'Pásztor Krisztián', 'osztály' : '14SZF' },
    { 'név' : 'Szabó Levente', 'osztály' : '14SZF' },
];

function osztalyListazas() {
    let szoveg = '<table>';
    szoveg += '<tr><th>Osztály</th><th>Név</th></tr>';
    students.forEach((student) => {
        szoveg += `<tr><td>${student.osztály}</td><td>${student.név}</td></tr>`;
    });
    szoveg +=  '</table>';
    document.getElementById('tablazat').innerHTML = szoveg;
}

osztalyListazas();

function feltolt() {
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly);


    let nevTomb = [];

    students.forEach((student) => {
        nevTomb.push(student.név);
    });

    if (nevTomb.includes(nev)){
        window.alert("Ez a név már szerepel a listában!");
    }
    else{
        students.push({ 'osztály' : `${osztaly}`, 'név' : `${nev}` });
    }
    /*let eldont = false;
    students.forEach((student) => {
        if (student.név == nev) {
             eldont = true;
        }
    });
    if (eldont) {
        window.alert("Ez a név már szerepel a listában!");
    }
    else{
        students.push({ 'osztály' : `${osztaly}`, 'név' : `${nev}` });
    }*/
    
    osztalyListazas();
}

function utolsoTorol(){
    students.pop();
    osztalyListazas();
}




