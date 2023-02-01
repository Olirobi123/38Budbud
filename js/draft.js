"use strict";
const NB_ROUNDE_20222023 = 26;
const EQUIPES_20222023 = ["Vidanges de Rimouski", "Les Ptit-Pains Fourrés de Limoilou", "Consanguins de Laterrière", "Dream Team de Saint-Pie-X", "Chiennes de Granby", "Enculés de Westmount", "Canadiens Français de la Rivière aux Graines"];
const NB_CHOIX_20222023 = EQUIPES_20222023.length * NB_ROUNDE_20222023;

/**
 * Initialise la page Draft
 */
function draft() {
    for (let i = 1; i <= NB_CHOIX_20222023; i++) {
        document.getElementById('Draft2022choix' + i).addEventListener('click', function (e) {
            genererPageJoueur(getActivePlayerId(e.target.textContent))
        });
    }
}
draft();
