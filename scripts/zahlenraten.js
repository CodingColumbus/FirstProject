
function zahlenraten() {

    var ausgedachtezahl;
    var oberegrenze = 100;
    var geratenezahl;
    var anzahlderversuche = 0;

    ausgedachtezahl = Math.random() * oberegrenze;
    ausgedachtezahl = Math.round(ausgedachtezahl + 0.5);

    do {
        geratenezahl = prompt("Rate bitte", "Eine Zahl bis " + oberegrenze);

        if (geratenezahl > ausgedachtezahl) {
            alert("Deine Zahl ist zu gross");
        }
        if (geratenezahl < ausgedachtezahl) {
            alert("Deine Zahl ist zu klein");
        }
        anzahlderversuche = anzahlderversuche + 1;

    } while (geratenezahl != ausgedachtezahl && anzahlderversuche < 10);

    if (geratenezahl == ausgedachtezahl) {
        alert("Du hast richtig geraten!"); style = "color: #00FF00"
    }
    alert("Du hast " + anzahlderversuche + " Mal geraten");

    if (geratenezahl != ausgedachtezahl) {
        alert("Du konntest die Zahl leider nicht erraten!")
    }
}