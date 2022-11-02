"use strict"

function trade(){
    genererTrades(tradesJson)
}

function genererTrades(jsonData) {
    let tableau = jsonData.echanges.saison2022_2023

    for (let i = tableau.length - 1; i < tableau.length && i > -1; i--) {

        let div = tradesDiv.appendChild(document.createElement("div"))
        div.innerHTML = "<h2>" + tableau[i].date + "</h2>"
        div.innerHTML += "<h4>" + tableau[i].team1 + "</h4><span>" + tableau[i].team2Receives +
            "</span><h4>" + tableau[i].team2 + "</h4><span>" + tableau[i].team1Receives + "</span>"
    }
    tradesDiv.innerHTML += tableau.length + " échanges en 2022-2023"
}

trade();
