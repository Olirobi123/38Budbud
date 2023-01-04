"use strict"
function index() {
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
index();