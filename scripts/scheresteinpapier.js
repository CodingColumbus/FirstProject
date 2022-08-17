var symbolcomputer;
var symbolspieler;
var anzahlrunden = 0;
var gewinnespieler = 0;
var gewinnecomputer = 0;
var gewinnbedingung = 0;

function scheresteinpapier(option) {

    ausgedachtezahl = Math.random() * 3;
    ausgedachtezahl = Math.round(ausgedachtezahl + 0.5);

    if (ausgedachtezahl == 1) { symbolcomputer = "Schere" };
    if (ausgedachtezahl == 2) { symbolcomputer = "Stein" };
    if (ausgedachtezahl == 3) { symbolcomputer = "Papier" };

    if (option == 1) { symbolspieler = "Schere" };
    if (option == 2) { symbolspieler = "Stein" };
    if (option == 3) { symbolspieler = "Papier" };

    if (symbolcomputer == symbolspieler) { alert("Unentschieden!") }

    if (symbolcomputer == "Schere" && symbolspieler == "Stein") {
        gewinnespieler++;
        alert("Du gewinnst gegen Schere");
    }
    if (symbolcomputer == "Stein" && symbolspieler == "Papier") {
        gewinnespieler++;
        alert("Du gewinnst gegen Stein");
    }
    if (symbolcomputer == "Papier" && symbolspieler == "Schere") {
        gewinnespieler++;
        alert("Du gewinnst gegen Papier");
    }
    if (symbolcomputer == "Schere" && symbolspieler == "Papier") {
        gewinnecomputer++;
        alert("Der Computer gewinnt mit Schere");
    }
    if (symbolcomputer == "Papier" && symbolspieler == "Stein") {
        gewinnecomputer++;
        alert("Der Computer gewinnt mit Papier");
    }
    if (symbolcomputer == "Stein" && symbolspieler == "Schere") {
        gewinnecomputer++;
        alert("Der Computer gewinnt mit Stein");
    }
    anzahlrunden++;

    if (gewinnecomputer >= 3 || gewinnespieler >= 3) {
        
        ergebnisAnzeigen();
        spielNeustart();
    }
}

function ergebnisAnzeigen() {

    if (gewinnespieler >= 3) {
        alert("Du hast das Spiel gewonnen. Super!");
    } else {
        alert("Der Computer war besser und hat das Spiel gewonnen!");
    }
    alert(gewinnespieler + " zu " + gewinnecomputer);
}

function spielNeustart() {

    anzahlrunden = 0;
    gewinnbedingung = 0;
    gewinnecomputer = 0;
    gewinnespieler = 0;
}
