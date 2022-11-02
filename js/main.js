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

function genererLiveGames() {
    live.innerHTML = ""
    let link = 'https://statsapi.web.nhl.com/api/v1/schedule'
    let schedule = new XMLHttpRequest();
    schedule.open('GET', link, true)
    schedule.send();

    schedule.onload = () => {
        let matchs = JSON.parse(schedule.response).dates[0].games
        if (matchs.length > 0) {
            for (let i = 0; i < matchs.length; i++) {
                let span = live.appendChild(document.createElement("span"))
                span.id = '' + i + ''
                let table = span.appendChild(document.createElement("table"))
                table.className = "tableLive";
                table.setAttribute("cellpading", "0")
                table.setAttribute("cellspacing", "0")
                table.setAttribute("cellpading", "5px")
                for (let j = 0; j < 3; j++) {
                    table.appendChild(document.createElement("tr"))
                }

                let tableChildren = table.children
                let time = tableChildren.item(0).appendChild(document.createElement("th"))
                let away = tableChildren.item(1).appendChild(document.createElement("td"))
                let awayScore = tableChildren.item(1).appendChild(document.createElement("td"))

                let home = tableChildren.item(2).appendChild(document.createElement("td"))
                let homeScore = tableChildren.item(2).appendChild(document.createElement("td"))

                time.setAttribute("colspan", "2")
                awayScore.setAttribute("valign", "center")
                homeScore.setAttribute("valign", "center")

                let liveFeed = new XMLHttpRequest();
                liveFeed.open('GET', 'https://statsapi.web.nhl.com' + matchs[i].link, false)
                liveFeed.send();


                let game = JSON.parse(liveFeed.response)
                away.innerHTML = game.gameData.teams.away.abbreviation
                home.innerHTML = game.gameData.teams.home.abbreviation
                awayScore.innerHTML = game.liveData.linescore.teams.away.goals
                homeScore.innerHTML = game.liveData.linescore.teams.home.goals

                if (game.gameData.status.abstractGameState !== "Preview")
                    time.innerHTML = game.liveData.linescore.currentPeriodOrdinal + '<br>' + game.liveData.linescore.currentPeriodTimeRemaining
                else {
                    let date = new Date(game.gameData.datetime.dateTime)
                    time.innerHTML = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

                }
            }
        }
    }
}

function main() {
    genererLiveGames();

    genererTrades(tradesJson)
    setInterval(genererLiveGames, 300000)
}

main();