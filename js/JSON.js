"use strict";
const CO = "Canadiens Français de la Rivière aux Graines";
const ANTHO = "Consanguins de Laterrière";
const OLI = "Chiennes de Granby";
const SAM = "Dream Team de Saint-Pie-X";
const NADO = "Vidanges de Rimouski";
const ANDREW = "Les Ptit-Pains Fourrés de Limoilou";
const TALBOT = "Enculés de Westmount";
const LIRETTE = "Alex Lirette (TEMPORAIRE)";

let tradesJson = {
	echanges: {
		saison2022_2023: [
			{
				date: "23 octobre",
				team1: CO,
				team1Receives: "Nico Hischier<br>Sergei Bobrovsky",
				team2: ANTHO,
				team2Receives: "Seth Jarvis<br>Igor Shesterkin<br>",
			},
			{
				date: "23 octobre",
				team1: CO,
				team1Receives: "Nathan MacKinnon<br>Gabriel Landeskog<br>",
				team2: OLI,
				team2Receives:
					"Robert Thomas<br>Clayton Keller<br>1st round pick 2023<br>",
			},
			{
				date: "23 octobre",
				team1: SAM,
				team1Receives:
					"Cam Talbot<br>Scott Perunovich<br>Matt Duchene<br>Roman Josi<br>",
				team2: OLI,
				team2Receives:
					"Logan Thompson<br>Evan Bouchard<br>Patrick Laine<br>1st round pick 2023<br>3rd round pick 2023<br>",
			},
			{
				date: "23 octobre",
				team1: TALBOT,
				team1Receives: "Sam Reinhart<br>1st round pick 2023<br>",
				team2: NADO,
				team2Receives: "Vladimir Tarasenko<br>",
			},
			{
				date: "23 octobre",
				team1: TALBOT,
				team1Receives: "Elias Petterson<br>Zach Werenski<br>",
				team2: SAM,
				team2Receives: "Evgeni Malkin<br>Kris Letang<br>",
			},
			{
				date: "1er novembre",
				team1: OLI,
				team1Receives:
					"Bowen Byram<br>Jake Sanderson<br>Timo Meier<br>Elias Lindholm<br>2nd round pick 2023",
				team2: NADO,
				team2Receives: "Sebastian Aho<br>Logan Thompson<br>2nd round pick 2024",
			},
			{
				date: "10 novembre",
				team1: SAM,
				team1Receives: "Erik Karlsson<br>Alex Ovechkin",
				team2: CO,
				team2Receives: "Mikko Rantanen<br>Jakub Chykrun",
			},
			{
				date: "15 novembre",
				team1: NADO,
				team1Receives: "Alex Pietrangelo<br>Brent Burns",
				team2: TALBOT,
				team2Receives: "Owen Power<br>Nikolaj Elhers",
			},
			{
				date: "17 novembre",
				team1: ANTHO,
				team1Receives:
					"Jack Hughes<br>Jesper Bratt<br>Sergei Bobrovsky<br>2nd round pick 2023",
				team2: CO,
				team2Receives: "Auston Matthews<br>Andrei Vasilevskiy<br>Devon Toews",
			},
			{
				date: "30 novembre",
				team1: OLI,
				team1Receives: "Lucas Raymond<br>Taylor Hall<br>2nd round pick 2024",
				team2: SAM,
				team2Receives: "Zach Hyman<br>Rasmus Andersson",
			},
			{
				date: "1er décembre",
				team1: NADO,
				team1Receives:
					"Ryan Nugent-Hopkins<br>Blake Wheeler<br>Gustav Forsling",
				team2: TALBOT,
				team2Receives:
					"Sebastian Aho<br>Samuel Girard<br>Phil Kessel<br>4th round pick 2023",
			},
			{
				date: "1er décembre",
				team1: ANTHO,
				team1Receives: "Vitek Vanecek<br>Nico Hischier<br>Patrick Kane",
				team2: CO,
				team2Receives: "Igor Shesterkin<br>Johnny Gaudreau<br>William Nylander",
			},
			{
				date: "19 décembre",
				team1: NADO,
				team1Receives: "Elias Petterson<br>Claude Giroux",
				team2: TALBOT,
				team2Receives: "Dylan Larkin<br>Noah Dobson<br>Victor Hedman",
			},
			{
				date: "13 janvier",
				team1: CO,
				team1Receives: "Leon Draisaitl",
				team2: ANDREW,
				team2Receives:
					"Josh Morrissey<br>Mark Stone<br>Andrei Vasilevskiy<br>3rd round pick 2023",
			},
			{
				date: "21 janvier",
				team1: ANTHO,
				team1Receives: "Anton Lundell<br>Dawson Mercer",
				team2: ANDREW,
				team2Receives:
					"Patrick Kane<br>Chandler Stephenson<br>3rd round pick 2023",
			},
			{
				date: "22 janvier",
				team1: ANTHO,
				team1Receives:
					"Connor Hellebuyk<br>Gustav Forsling<br>Jack Guentzel<br>Mark Giordano<br>1st round pick 2024<br>5th round pick 2023",
				team2: NADO,
				team2Receives:
					"Jack Hughes<br>Pierre-Luc Dubois<br>Jack Campbell<br>Seth Jones",
			},
			{
				date: "1er février",
				team1: ANTHO,
				team1Receives:
					"Jack Eichel<br>Alex Newhook<br>John Gibson<br>2nd round pick 2024",
				team2: CO,
				team2Receives: "Aleksander Barkov<br>Brandon Montour",
			},
			{
				date: "1er mars",
				team1: OLI,
				team1Receives:
					"Luke Hughes<br>Morgan Rielly<br>Matt Murray<br>1nd round pick 2023",
				team2: ANDREW,
				team2Receives: "Rasmus Dahlin<br>3th round pick 2023",
			},
			{
				date: "1er mars",
				team1: OLI,
				team1Receives:
					"Trevor Zegras<br>Johnny Gaudreau<br>Miro Heiskanen<br>Jamie Drysdale<br>1st round pick 2024",
				team2: CO,
				team2Receives: "Matthew Tkachuk<br>Brady Tkachuk<br>Jake Sanderson",
			},
			{
				date: "1er mars",
				team1: OLI,
				team1Receives: "Mathew Barzal",
				team2: SAM,
				team2Receives:
					"Martin Jones<br>4th round pick 2023<br>5th round pick 2023<br>6th round pick 2023",
			},
			{
				date: "1er mars",
				team1: NADO,
				team1Receives:
					"Matthew Boldy<br>Jordan Kyrou<br>Drake Batherson<br>Matt Duchene<br>Tristan Jarry<br>Cam Talbot<br>Rasmus Andersson<br>1st round pick 2024<br>3rd round pick 2024<br>6th round pick 2023 (VIA OLI)",
				team2: SAM,
				team2Receives:
					"Sidney Crosby<br>John Tavares<br>Mika Zibanejad<br>Claude Giroux<br>Brent Burns",
			},
			{
				date: "3 mars",
				team1: CO,
				team1Receives: "Brayden Point<br>Kyle Connor",
				team2: ANDREW,
				team2Receives: "Auston Matthews<br>Aleksander Barkov",
			},
			{
				date: "8 septembre",
				team1: NADO,
				team1Receives: "Philip Hronek<br>3rd round pick 2023",
				team2: LIRETTE,
				team2Receives: "Drew Doughty<br>Evander Kane",
			},
		],
	},
};
