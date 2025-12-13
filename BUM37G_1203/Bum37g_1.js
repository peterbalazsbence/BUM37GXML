$(document).ready(function () {

    $("#gomb").click(function () {
        $.ajax({
            url: "orarendBum37g.json",
            dataType: "json",

            success: function (adat) {

                let ki = `
                    <h2>${adat.egyetem}</h2>
                    <b>Cím:</b> ${adat.cim}<br><br>

                    <b>Telefonszám:</b><br>
                    Vezetékes: ${adat.vezetekes}<br>
                    Mobil: ${adat.mobil}<br><br>

                    <b>${adat.felev}</b><br><br>

                    <b>Tárgy:</b> ${adat.tantargy}<br><br>

                    <b>Időpont:</b><br>
                    Nap: ${adat.nap}<br>
                    Tól: ${adat.tol}<br>
                    Ig: ${adat.ig}<br><br>

                    <b>Helyszín:</b> ${adat.helyszin}<br><br>

                    <b>Oktató:</b> ${adat.oktato}<br><br>

                    <b>Szak:</b> ${adat.szak}<br><br>
                    <b>Típus:</b> ${adat.tipus}
                `;

                $("#eredmeny").html(ki);
            },

            error: function () {
                alert("Hiba történt a JSON betöltésekor.");
            }
        });
    });

});
