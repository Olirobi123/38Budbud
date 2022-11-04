"use strict"
const proxy = 'https://api.allorigins.win/raw?url='

function liveFeed() {
    genererLiveGames();
    rechercheJoueur.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            genererPageJoueur(getActivePlayerId(rechercheJoueur.value));
        }
    });
}

function getActivePlayerId(name) {
    let player = new XMLHttpRequest();
    player.open('GET', proxy + 'https://suggest.svc.nhl.com/svc/suggest/v1/minactiveplayers/' + name + '/1', false)
    player.send();

    return parseInt(JSON.parse(player.response).suggestions[0].slice(0, 7))
}

function creerTable() {
    content.className = 'joueur'
    let table = content.appendChild(document.createElement('table'))
    table.id = 'statsJoueur'
    let tableHeader = statsJoueur.appendChild(document.createElement('thead'))
    tableHeader.id = 'tableHead'
    let premierTr = tableHead.appendChild(document.createElement('tr'))
    let nom = premierTr.appendChild(document.createElement('th'))
    nom.id = 'nomJoueur'
    nom.setAttribute('colspan', '7')
    nom.innerHTML = 'NOM'
    let deuxiemeTr = tableHead.appendChild(document.createElement('tr'))
    deuxiemeTr.id = 'headerTable'
    let ann = document.createElement('th')
    ann.innerHTML = 'Année'
    let equ = document.createElement('th')
    equ.innerHTML = 'Équipe'
    let ligue = document.createElement('th')
    ligue.innerHTML = 'Ligue'
    let pj = document.createElement('th')
    pj.innerHTML = 'PJ'
    let b = document.createElement('th')
    b.innerHTML = 'B'
    let a = document.createElement('th')
    a.innerHTML = 'A'
    let pts = document.createElement('th')
    pts.innerHTML = 'PTS'
    deuxiemeTr.appendChild(ann)
    deuxiemeTr.appendChild(equ)
    deuxiemeTr.appendChild(ligue)
    deuxiemeTr.appendChild(pj)
    deuxiemeTr.appendChild(b)
    deuxiemeTr.appendChild(a)
    deuxiemeTr.appendChild(pts)

    let tableBody = statsJoueur.appendChild(document.createElement('tbody'))
    tableBody.id = 'tbodyStats'
}

function genererPageJoueur(id) {
    if (!isNaN(parseInt(id))) {
        if (!document.getElementById('statsJoueur')) {
            content.innerHTML = ''
            creerTable();
        } else
            tbodyStats.innerHTML = ''

        //REQUEST
        let player = new XMLHttpRequest();
        player.open('GET', 'https://statsapi.web.nhl.com/api/v1/people/' + id + '/stats?stats=yearByYear', false)
        player.send();
        let arraySeasons = JSON.parse(player.response).stats[0].splits

        let name = new XMLHttpRequest()
        name.open('GET', 'https://statsapi.web.nhl.com/api/v1/people/' + id, false)
        name.send();

        nomJoueur.innerHTML = JSON.parse(name.response).people[0].fullName
        for (let i = 0; i < arraySeasons.length; i++) {

            if (arraySeasons[i].league.name === 'National Hockey League') {
                let tr = tbodyStats.appendChild(document.createElement("tr"))
                let season = tr.appendChild(document.createElement("td"))
                season.innerHTML = arraySeasons[i].season.slice(0, 4) + '-' + arraySeasons[i].season.slice(4);
                let team = tr.appendChild(document.createElement("td"))
                team.innerHTML = arraySeasons[i].team.name

                let league = tr.appendChild(document.createElement("td"))
                league.innerHTML = arraySeasons[i].league.name

                let pj = tr.appendChild(document.createElement("td"))
                pj.innerHTML = arraySeasons[i].stat.games

                let goals = tr.appendChild(document.createElement("td"))
                goals.innerHTML = arraySeasons[i].stat.goals.toString()

                let passes = tr.appendChild(document.createElement("td"))
                passes.innerHTML = arraySeasons[i].stat.assists.toString()

                let points = tr.appendChild(document.createElement("td"))
                points.innerHTML = arraySeasons[i].stat.points.toString()
            }
        }
    }
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
                let time = table.firstElementChild.appendChild(document.createElement("th"))
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

liveFeed();