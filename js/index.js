"use strict"
function index() {
    afficherDirect()
    afficherDernierEchange(tradesJson)
}
function afficherDernierEchange(jsonData){
    let echange = jsonData.echanges.saison2022_2023
    echange = echange[echange.length -1]
    dateTable.innerHTML = echange.date
    equipe1.innerHTML = echange.team1
    recoit1.innerHTML = echange.team2Receives
    equipe2.innerHTML = echange.team2
    recoit2.innerHTML = echange.team1Receives
}


function afficherDirect() {
  fetch(proxy + 'https://www.marqueur.com/hockey/mbr/tools/pool/index.php?nyx=190707')
  .then(function(response) {
    // Get the response and format it to text
    return response.text()
  })
  .then(function(html) {
    // Create a new div element
    let div = document.createElement('div')

    // Set the inner HTML of the div to the HTML of the page
    div.innerHTML = html
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    let table  = doc.querySelector("body > div.w3-main > div.w3-row > div.w3-col.l8.pl15.pr15.pb15 > div > div.pt20.pl10.pr10.pb20 > div:nth-child(3) > div:nth-child(1)")
    content.appendChild(table)
    })
}

index();