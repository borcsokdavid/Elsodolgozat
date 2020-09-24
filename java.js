'use strict'

const diakok =[
    
    {nev: 'Tóth Balázs', osztály: '14szf'},
    {nev: 'Börcsök Dávid', osztály: '14szf'},
    {nev: 'Kucsera Kinga', osztály: '14szf'},
    {nev: 'Pásztor Krisztián', osztály: '14szf'},
    {nev: 'Szabó Levente', osztály: '14szf'},
    {nev: 'Visnyei Ádám', osztály: '14szf'},
];

function getPosts(){
        
        let output = '<table>';
        output += '<tr><th>Osztály</th><th>Név</th></tr>';
        
        
        diakok.forEach((student) => {
           
            output += `<tr><td>${student.osztály}</td><td>${student.nev}</td></tr>`;
            
        })
        output += '</table>';
        document.getElementById('tablazat').innerHTML = output
    
}

getPosts();


function feltolt(){
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly);
    diakok.push({ 'osztaly': `${osztaly}`, 'nev': `${nev}` })
    getPosts();
}
