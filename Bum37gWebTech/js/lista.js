$(document).ready(function () {

    let kijeloltKartya = null;

    $.getJSON("data/latnivalok.json", function (adatok) {

        const tabla = $("#latTabla tbody");
        const grid = $("#grid");

        adatok.latnivalok.forEach(hely => {

            const sor = `
                <tr>
                    <td>${hely.nev}</td>
                    <td>${hely.varos}</td>
                    <td>${hely.lat}, ${hely.lng}</td>
                </tr>
            `;
            tabla.append(sor);

            const kepUrl = hely.kep ? hely.kep : "images/placeholder.jpg";

            const kartya = $(`
                <div class="kartya">
                    <img src="${kepUrl}" alt="${hely.nev}">
                    <h3>${hely.nev}</h3>
                    <p>${hely.varos}</p>
                </div>
            `);

            grid.append(kartya);
        });

    }).fail(function () {
        console.error("Nem sikerült betölteni a data/latnivalok.json fájlt");
    });

    $(document).on("click", ".kartya", function () {
        $(".kartya").removeClass("kijelolt");
        $(this).addClass("kijelolt");
        kijeloltKartya = $(this);
    });

    $("#ujElemBtn").click(function () {
        const cim = prompt("Mi legyen az új kártya címe?");

        if (!cim || cim.trim() === "") {
            alert("Nem adhatsz meg üres címet!");
            return;
        }

        const ujKartya = $(`
            <div class="kartya">
                <h3>${cim.trim()}</h3>
                <p>A te látványosságod.</p>
            </div>
        `);

        $("#grid").prepend(ujKartya);
    });

    $("#modositBtn").click(function () {

        if (!kijeloltKartya) {
            alert("Előbb kattints egy kártyára, hogy kijelöld!");
            return;
        }

        const jelenlegiCim = kijeloltKartya.find("h3").text();
        const ujCim = prompt("Mi a látványosság neve?", jelenlegiCim);

        if (!ujCim || ujCim.trim() === "") {
            alert("Nem adhatsz meg üres nevet!");
            return;
        }

        kijeloltKartya.find("h3").text(ujCim.trim());
    });

});
