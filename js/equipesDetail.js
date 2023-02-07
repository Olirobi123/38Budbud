"use strict";

function getEquipe() {
    return content.dataset.team;
}

function remplirTabQuestions(jsonData, nom) {
    for (const key in jsonData.equipes) {
        if (key === nom) {
            return jsonData.equipes[key]
        }
    }
}

function afficherPicks(data) {
    for (let i = 0; i < data.picks.length; i++) {
        document.getElementById("picks").innerHTML += data.picks[i] + "<br>"
    }
}
function creerSpanDetaille() {
    let spanDetaille = document.createElement("span");
    spanDetaille.className = "spanDetaille";
    return spanDetaille
}

function creerSpanNormal() {
    let span = document.createElement("span");
    span.className = "typeVictoires";
    return span
}

function afficherDernieresVictoires(id, data) {
    console.log(data)
    let span = document.getElementById(id)
    span.innerText = " ("
    for (let i = data.length - 1; i >= 0; i--) {
        span.innerHTML += data[i]

        if (i !== 0){
            span.innerHTML += ", "
        }
    }
    span.innerText += ")"

}

function afficherAwards(data) {
    console.log(data)
    let awards = resumeTeam.appendChild(document.createElement("div"))
    awards.id = "awardsDiv";
    let titre = awards.appendChild(document.createElement("h3"))
    titre.innerHTML = "Nombre de victoires"

    awards.appendChild(creerSpanNormal()).id = "general";
    general.innerHTML = "Général: " + data.general.length;
    let generalDetail = awards.appendChild(creerSpanDetaille());
    generalDetail.id = "generalGeneral";
    if (data.general.length > 0){
        afficherDernieresVictoires("generalGeneral", data.general);
    }

    awardsDiv.appendChild(document.createElement("br"))

    awards.appendChild(creerSpanNormal()).id = "playoff";
    playoff.innerHTML = "Playoff:&nbsp;&nbsp;&nbsp;" + data.playoff.length;
    let playoffDetail = awards.appendChild(creerSpanDetaille());
    playoffDetail.id = "playoffGeneral";
    if (data.playoff.length > 0){
        afficherDernieresVictoires("playoffGeneral", data.playoff);
    }

    awardsDiv.appendChild(document.createElement("br"))

    awards.appendChild(creerSpanNormal()).id = "attaque";
    attaque.innerHTML = "Attaque: " + data.attaque.length;
    let attaqueDetail = awards.appendChild(creerSpanDetaille());
    attaqueDetail.id = "attaqueGeneral";
    if (data.attaque.length > 0){
        afficherDernieresVictoires("attaqueGeneral", data.attaque);
    }

    awardsDiv.appendChild(document.createElement("br"))

    awards.appendChild(creerSpanNormal()).id = "defense";
    defense.innerHTML = "Défense: " + data.defense.length;
    let defenseDetail = awards.appendChild(creerSpanDetaille());
    defenseDetail.id = "defenseGeneral";
    if (data.defense.length > 0){
        afficherDernieresVictoires("defenseGeneral", data.defense);
    }

    awardsDiv.appendChild(document.createElement("br"))

    awards.appendChild(creerSpanNormal()).id = "gardien";
    gardien.innerHTML = "Gardien: " + data.gardien.length;
    let gardienDetail = awards.appendChild(creerSpanDetaille());
    gardienDetail.id = "gardienGeneral";
    if (data.gardien.length > 0){
        afficherDernieresVictoires("gardienGeneral", data.gardien);
    }

}

function genererImage(nomTeam) {
    let img = document.getElementById("resumeTeam").appendChild(document.createElement("img"))
    img.id = "imgTeamInfo"

    switch (nomTeam) {
        case "Enculés de Westmount":
            img.src = "../../images/westmount.jpg";
            break;
        case "Consanguins de Laterrière":
            img.src = "../../images/laterriere.jpg"
            break;
        case "Chiennes de Granby":
            img.src = "../../images/granby.jpg"
            break;
        case "Dream Team de Saint-Pie-X":
            img.src = "../../images/saint.jpeg"
            break;
        case "Les Ptit-Pains Fourrés de Limoilou":
            img.src = "../../images/limoilou.jpg"
            break;
        case "Vidanges de Rimouski":
            img.src = "../../images/riimouski.jpg"
            break;
        case "Canadiens Français de la Rivière aux Graines":
            img.src = "../../images/riviere.jpg"
            break;
    }
}

function genererPage() {
    let nomTeam = getEquipe()
    let data = remplirTabQuestions(equipesJSON, nomTeam)
    afficherPicks(data);
    genererImage(nomTeam);
    afficherAwards(data.awards);


}

genererPage();