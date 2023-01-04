"use strict"
const proxy = 'https://api.allorigins.win/raw?url='
const currentSeason = '20222023'

function liveFeed() {
    genererLiveGames();
    rechercheJoueur.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            genererPageJoueur(getActivePlayerId(rechercheJoueur.value));
        }
    });
    document.getElementById('hamberger-icon').addEventListener('click', function (e) {
        let tab = document.querySelectorAll('#mobile-menu li')
        for (let i = 0; i < tab.length; i++) {
            tab[i].className = 'afficher'
            document.getElementById('mobile-menu-ul').className = 'container-aff-oui'
        }
    });

    document.getElementById('xImage').addEventListener('click', function () {
        let tab = document.querySelectorAll('#mobile-menu li')
        for (let i = 0; i < tab.length; i++) {
            tab[i].className = 'cacher'
            document.getElementById('mobile-menu-ul').className = 'container-aff-non'
        }
    });
}

function getActivePlayerId(name) {
    let player = new XMLHttpRequest();
    player.open('GET', proxy + 'https://suggest.svc.nhl.com/svc/suggest/v1/minactiveplayers/' + name + '/1', false)
    player.send();

    let returnValue = false
    try {
        returnValue = parseInt(JSON.parse(player.response).suggestions[0].slice(0, 7));
    } catch (error) {
        alert('Le joueur suivant n\'exite pas.\nVérifiez si le joueur est apte a être selectionné par un club de la 38Budbud. Si oui, vérifiez l\'ortographe')
    }
    return returnValue
}

function creerTable(position) {
    let table = content.appendChild(document.createElement('table'))
    table.id = 'statsJoueur'
    table.className = 'tablePrincipal'
    let tableHeader = statsJoueur.appendChild(document.createElement('thead'))
    tableHeader.id = 'tableHead'
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
    deuxiemeTr.appendChild(ann)
    deuxiemeTr.appendChild(equ)
    deuxiemeTr.appendChild(ligue)
    deuxiemeTr.appendChild(pj)
    //Patineur
    if (position !== 'G') {
        let b = document.createElement('th')
        b.innerHTML = 'B'
        let a = document.createElement('th')
        a.innerHTML = 'A'
        let pts = document.createElement('th')
        pts.innerHTML = 'PTS'
        let ppg = document.createElement('th')
        ppg.innerHTML = 'PPG'
        deuxiemeTr.appendChild(b)
        deuxiemeTr.appendChild(a)
        deuxiemeTr.appendChild(pts)
        deuxiemeTr.appendChild(ppg)
    } else {
        //Gardiens
        let victoires = document.createElement('th')
        victoires.innerHTML = 'V'
        let l = document.createElement('th')
        l.innerHTML = 'D'
        let bl = document.createElement('th')
        bl.innerHTML = 'BL'
        let gaa = document.createElement('th')
        gaa.innerHTML = 'GAA'
        let pct = document.createElement('th')
        pct.innerHTML = 'PCT'

        deuxiemeTr.appendChild(victoires)
        deuxiemeTr.appendChild(l)
        deuxiemeTr.appendChild(bl)
        deuxiemeTr.appendChild(gaa)
        deuxiemeTr.appendChild(pct)
    }


    let tableBody = statsJoueur.appendChild(document.createElement('tbody'))
    tableBody.id = 'tbodyStats'
}

function genererPageJoueur(id) {
    content.style.height = 'unset'
    if (!isNaN(parseInt(id))) {
        rechercheJoueur.value = '';
        if (document.querySelector('#tradesSection h1')) {
            document.querySelector('#tradesSection h1').remove();
        } else if (document.querySelector('#draftSection h1')) {
            document.querySelector('#draftSection h1').remove();
        }

        //REQUEST
        let player = new XMLHttpRequest();
        player.open('GET', 'https://statsapi.web.nhl.com/api/v1/people/' + id + '/stats?stats=yearByYear', false)
        player.send();
        let arraySeasons = JSON.parse(player.response).stats[0].splits

        let name = new XMLHttpRequest()
        name.open('GET', 'https://statsapi.web.nhl.com/api/v1/people/' + id, false)
        name.send();
        let codePosition = JSON.parse(name.response).people[0].primaryPosition.abbreviation
        content.innerHTML = ''
        creerTable(codePosition);
        if (codePosition !== 'G') {
            let cPj = 0
            let cBut = 0
            let cA = 0;
            let cPts = 0;
            for (let i = 0; i < arraySeasons.length; i++) {
                let ok = false;
                let ligue = ''
                switch (arraySeasons[i].league.name) {
                    case ('National Hockey League'):
                        ok = true
                        ligue = 'NHL'
                        break;
                    case ('AHL'):
                        ok = true
                        ligue = 'AHL'
                        break
                    case ('KHL'):
                        ok = true
                        ligue = 'KHL'
                        break
                    case ('Russia'):
                        ok = true
                        ligue = 'Russia'
                        break
                    case ('QMJHL'):
                        ok = true;
                        ligue = 'LHJMQ'
                        break;
                    case ('WHL'):
                        ok = true
                        ligue = 'WHL'
                        break
                    case ('OHL'):
                        ok = true
                        ligue = 'OHL'
                        break;

                    case ('NCAA'):
                        ok = true
                        ligue = 'NCAA'
                        break;
                    case ('USDP'):
                        ok = true
                        ligue = 'USDP'
                        break;
                    case ('USHL'):
                        ok = true
                        ligue = 'USHL'
                        break;
                    case ('SHL'):
                        ok = true;
                        ligue = 'SHL'
                        break;
                    case ('Sweden'):
                        ok = true;
                        ligue = 'Sweden'
                        break;
                    case ('Liiga'):
                        ok = true
                        ligue = 'Liiga'
                        break;
                    case ('Finland'):
                        ok = true
                        ligue = 'Liiga'
                        break;
                    case ('Slovakia'):
                        ok = true
                        ligue = 'Slovak'
                        break;
                    case ('ECHL'):
                        ok = true
                        ligue = 'ECHL'
                        break
                    case ('ECAC'):
                        ok = true
                        ligue = 'ECAC'
                        break;
                    case ('DEL'):
                        ok = true
                        ligue = 'DEL'
                        break
                }
                if (ok) {
                    let tr = tbodyStats.appendChild(document.createElement("tr"))
                    let season = tr.appendChild(document.createElement("td"))
                    season.innerHTML = arraySeasons[i].season.slice(0, 4) + '-' + arraySeasons[i].season.slice(4);
                    let team = tr.appendChild(document.createElement("td"))
                    team.innerHTML = arraySeasons[i].team.name

                    let league = tr.appendChild(document.createElement("td"))
                    league.innerHTML = ligue

                    let pjStat = arraySeasons[i].stat.games

                    if (ligue === 'NHL') {
                        cPj += pjStat
                    }
                    let pj = tr.appendChild(document.createElement("td"))
                    pj.innerHTML = pjStat


                    if (ligue === 'NHL') {
                        cBut += arraySeasons[i].stat.goals
                    }
                    let goals = tr.appendChild(document.createElement("td"))
                    goals.innerHTML = arraySeasons[i].stat.goals.toString()

                    if (ligue === 'NHL') {
                        cA += arraySeasons[i].stat.assists
                    }
                    let passes = tr.appendChild(document.createElement("td"))
                    passes.innerHTML = arraySeasons[i].stat.assists.toString()

                    let ptsStat = arraySeasons[i].stat.points
                    if (ligue === 'NHL') {
                        cPts += ptsStat
                    }
                    let points = tr.appendChild(document.createElement("td"))
                    points.innerHTML = ptsStat.toString()

                    let ppgStat = 0
                    if (pjStat >= 1)
                        ppgStat = ((ptsStat / pjStat).toFixed(2))
                    let ppg = tr.appendChild(document.createElement("td"))
                    ppg.innerHTML = ppgStat.toString()
                }
            }
            let totalTr = tbodyStats.appendChild(document.createElement("tr"))
            let total = totalTr.appendChild(document.createElement('th'))
            total.innerHTML = 'Total dans la NHL'
            total.setAttribute('colSpan', 3)

            let pj = totalTr.appendChild(document.createElement('th'))
            pj.innerHTML = cPj.toString()

            let b = totalTr.appendChild(document.createElement('th'))
            b.innerHTML = cBut.toString()

            let a = totalTr.appendChild(document.createElement('th'))
            a.innerHTML = cA.toString()

            let pts = totalTr.appendChild(document.createElement('th'))
            pts.innerHTML = cPts

            let cPpg = 0;
            if (cPj >= 1)
                cPpg = (cPts / cPj).toFixed(2)
            let ppg = totalTr.appendChild(document.createElement('th'))
            ppg.innerHTML = cPpg.toString()
        } else {
            let cPj = 0;
            let cV = 0;
            let cL = 0;
            let cBl = 0;
            let cGa = 0;
            let cGstarted = 0;
            let cPct = 0;
            let cShotAgainst = 0;
            let cSaves = 0;
            let nbSaison = 0;

            for (let i = 0; i < arraySeasons.length; i++) {
                let ok = false;
                let ligue = '';
                switch (arraySeasons[i].league.name) {
                    case ('National Hockey League'):
                        ok = true
                        ligue = 'NHL'
                        break;
                    case ('QMJHL'):
                        ok = true;
                        ligue = 'LHJMQ'
                        break;
                    case ('WHL'):
                        ok = true
                        ligue = 'WHL'
                        break
                    case ('OHL'):
                        ok = true
                        ligue = 'OHL'
                        break;

                }
                if (ok) {
                    let tr = tbodyStats.appendChild(document.createElement('tr'))
                    let annee = tr.appendChild(document.createElement('td'))
                    annee.innerHTML = arraySeasons[i].season.slice(0, 4) + '-' + arraySeasons[i].season.slice(4);

                    let team = tr.appendChild(document.createElement("td"))
                    team.innerHTML = arraySeasons[i].team.name

                    let league = tr.appendChild(document.createElement("td"))
                    league.innerHTML = ligue

                    let pjStat = arraySeasons[i].stat.games
                    let pj = tr.appendChild(document.createElement('td'))
                    pj.innerHTML = pjStat

                    let vStat = arraySeasons[i].stat.wins
                    let v = tr.appendChild(document.createElement('td'))
                    if (vStat !== undefined)
                        v.innerHTML = vStat
                    else
                        v.innerHTML = '-'
                    let lStat = arraySeasons[i].stat.losses
                    let l = tr.appendChild(document.createElement('td'))
                    if (lStat !== undefined)
                        l.innerHTML = lStat
                    else
                        l.innerHTML = '-'

                    let blStat = arraySeasons[i].stat.shutouts
                    let bl = tr.appendChild(document.createElement('td'))
                    if (blStat !== undefined)
                        bl.innerHTML = blStat
                    else
                        bl.innerHTML = '-'

                    let gaaStat = arraySeasons[i].stat.goalAgainstAverage
                    let gaa = tr.appendChild(document.createElement('td'))
                    if (gaaStat !== undefined)
                        gaa.innerHTML = gaaStat.toFixed(2)
                    else
                        gaa.innerHTML = '-'

                    let pctStat = arraySeasons[i].stat.savePercentage
                    let pct = tr.appendChild(document.createElement('td'))
                    if (pctStat !== undefined)
                        pct.innerHTML = pctStat.toFixed(3)
                    else
                        pct.innerHTML = '-'
                    if (ligue === 'NHL') {
                        cPj += pjStat
                        cV += vStat
                        cL += lStat
                        cBl += blStat
                        cGstarted += arraySeasons[i].stat.gamesStarted
                        cGa += arraySeasons[i].stat.goalsAgainst
                        cShotAgainst += arraySeasons[i].stat.shotsAgainst
                        cSaves += arraySeasons[i].stat.saves
                        cPct += pctStat
                        nbSaison++;
                    }
                }
            }
            let totalTr = tbodyStats.appendChild(document.createElement("tr"))
            let total = totalTr.appendChild(document.createElement('th'))
            total.innerHTML = 'Total dans la NHL'
            total.setAttribute('colSpan', 3)

            let pj = totalTr.appendChild(document.createElement('th'))
            pj.innerHTML = cPj.toString()

            let v = totalTr.appendChild(document.createElement('th'))
            v.innerHTML = cV.toString()

            let l = totalTr.appendChild(document.createElement('th'))
            l.innerHTML = cL.toString()

            let bl = totalTr.appendChild(document.createElement('th'))
            bl.innerHTML = cBl.toString()

            let gaa = totalTr.appendChild(document.createElement('th'))
            gaa.innerHTML = (cGa / cGstarted).toFixed(2)

            let pct = totalTr.appendChild(document.createElement('th'))
            pct.innerHTML = (cSaves / cShotAgainst).toFixed(3)
        }


        //Creation info Joueur
        let info = content.appendChild(document.createElement('table'))
        info.id = 'infoJoueur'
        let tr = info.appendChild(document.createElement("tr"))
        tr.id = 'premierTr'
        let thHeadPicture = tr.appendChild(document.createElement('th'))
        let picture = thHeadPicture.appendChild(document.createElement('img'))
        let linkTeam = JSON.parse(name.response).people[0].currentTeam.link

        let abbCall = new XMLHttpRequest();
        abbCall.open('GET', 'https://statsapi.web.nhl.com' + linkTeam, true)
        abbCall.send();

        abbCall.onload = () => {
            let abbTeam = JSON.parse(abbCall.response).teams[0].abbreviation;
            picture.src = 'https://assets.nhle.com/mugs/nhl/' + currentSeason + '/' + abbTeam + '/' + id + '.png';
            picture.alt = "Photo indisponible pour les joueurs pas dans la AHL et NHL"
            thHeadPicture.setAttribute('rowSpan', '3')
            thHeadPicture.setAttribute('width', '168px')
            picture.id = 'imgJoueur'
            let thHead = tr.appendChild(document.createElement('th'))
            thHead.innerHTML = JSON.parse(name.response).people[0].fullName
            thHead.id = 'titreInfo'
            thHead.setAttribute('colSpan', '2')
            let tbodyPremierTr = info.appendChild(document.createElement('tr'))
            let positions = tbodyPremierTr.appendChild(document.createElement('td'))
            let rightVsLeft = 'Left'
            if (JSON.parse(name.response).people[0].shootsCatches === 'R')
                rightVsLeft = 'Right'
            positions.innerHTML = JSON.parse(name.response).people[0].primaryPosition.name + ' | ' + 'Shoots: ' + rightVsLeft

            let tbodyDeuxTr = info.appendChild(document.createElement('tr'))
            let age = tbodyDeuxTr.appendChild(document.createElement('td'))
            age.innerHTML = JSON.parse(name.response).people[0].currentAge + ' ans'
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
                span.id = i.toString();
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
                let awayImg = away.appendChild(document.createElement('img'))
                let awayAbb = game.gameData.teams.away.abbreviation
                let homeImg = home.appendChild(document.createElement('img'))
                let homeAbb = game.gameData.teams.home.abbreviation
                awayImg.src = 'https://assets.nhle.com/logos/nhl/svg/' + awayAbb + '_dark.svg'
                homeImg.src = 'https://assets.nhle.com/logos/nhl/svg/' + homeAbb + '_dark.svg'
                awayImg.className = 'logoTeam';
                homeImg.className = 'logoTeam';
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