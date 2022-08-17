function zufallsgenerator() {
    var zufallszahl;

    zufallszahl = Math.random() * prompt("Gib die obere Grenze ein", "Egal welche Zahl");
    zufallszahl = Math.round(zufallszahl + 0.5)
    alert("Es ist " + zufallszahl)
}