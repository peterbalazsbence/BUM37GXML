$(document).ready(function () {

    // 1. Szöveg hozzáadása
    $("#szoveg").click(function () {
        $("#doboz").append("<br>Programtervező informatikus!");
    });

    // 2. Gomb hozzáadása – PTT MI Gomb!
    $("#gombhozza").click(function () {
        $("#doboz").append("<br><button>PTI MI Gomb!</button>");
    });

    // 3. Új Gomb felvétele – Forrás után, ME GEIK-PTI
    $("#ujgomb").click(function () {
        $("#doboz").html(function (index, tartalom) {
            return tartalom.replace("Forrás",
                "Forrás <button>ME GEIK-PTI</button>");
        });
    });

    // 4. Fejléc felvétele – jQuery feladat
    $("#fejlec").click(function () {
        $("body").prepend("<h1>jQuery feladat</h1>");
    });

    // 5. Alcím felvétele – HTML metódusok
    $("#alcim").click(function () {
        $("body").prepend("<h3>HTML metódusok</h3>");
    });

    // 6. Űrlap fejléc felvétele – ŰRLAP-BUM37G
    $("#urlapfejlec").click(function () {
        $("#urlap").prepend("<h3>ŰRLAP-BUM37G</h3>");
    });

});
