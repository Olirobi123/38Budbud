"use strict";
const NB_ROUNDE_20222023 = 26;
const EQUIPES_20222023 = ["Vidanges de Rimouski", "Les Ptit-Pains Fourrés de Limoilou", "Consanguins de Laterrière", "Dream Team de Saint-Pie-X", "Chiennes de Granby", "Enculés de Westmount", "Canadiens Français de la Rivière aux Graines"];
const NB_CHOIX_20222023 = EQUIPES_20222023.length * NB_ROUNDE_20222023;

/**
 * Créer les 26 tables pour les roundes de draft
 */
function creerTableRondes(jsonData) {
	let choixTotal = 1;
    let ordreRepechage = jsonData
	for (let i = 0; i < NB_ROUNDE_20222023; i++) {
		let table = content.appendChild(document.createElement("table"));
		table.id = "tableRounde" + (i + 1);
        table.setAttribute('class', 'tableDraft')
		let trTitre = table.appendChild(document.createElement("tr"));
		let titre = trTitre.appendChild(document.createElement("th"));
		titre.setAttribute("colspan", 3);
		titre.innerHTML = "Rounde " + (i + 1);

		let headerTable = table.appendChild(document.createElement("tr"));
		headerTable.appendChild(document.createElement("th")).innerHTML =
			"Choix Total";
		headerTable.appendChild(document.createElement("th")).innerHTML = "Équipe";
		headerTable.appendChild(document.createElement("th")).innerHTML = "Joueur";

		for (let j = 0; j < EQUIPES_20222023.length; j++) {
			let tr = table.appendChild(document.createElement("tr"));
			let choixTd = tr.appendChild(document.createElement("td"))
            choixTd.innerHTML = choixTotal;
            choixTd.setAttribute('class', 'choix')
            if((i+1) % 2 === 0){
                tr.appendChild(document.createElement("td")).innerHTML = EQUIPES_20222023[EQUIPES_20222023.length - 1 - j]
                tr.appendChild(document.createElement('td')).innerHTML = ordreRepechage[EQUIPES_20222023[EQUIPES_20222023.length - 1 - j]][i];
            } else{
                tr.appendChild(document.createElement("td")).innerHTML = EQUIPES_20222023[j]
                tr.appendChild(document.createElement('td')).innerHTML = ordreRepechage[EQUIPES_20222023[j]][i];
            }
			choixTotal++;
		}
	}
}

creerTableRondes(repechage2022_2023);
