function volumenrechner() {


    var ergebnisse = new Array();
    do {
        var volumen = prompt("Gib die Seitenlänge ein", "Seitenlänge in Zentimetern") * prompt("Gib die 2. Seitenlänge ein", "Seitenlange in Zentimetern") * prompt("Gib die 3. Seitnlänge ein", "Seitenlänge in Zentimetern");
        ergebnisse.push(volumen);
        alert(volumen + "cm³");
        if (volumen == 0) {
            break;
        }
    } while (true);
    //document.write(ergebnisse);
    document.write("<p style=\"color: blue \">");
    for (i = 0; i < ergebnisse.length; i++) {
        document.write(ergebnisse[i] + ", " + "<br/>");
    } document.write("</p>");

}