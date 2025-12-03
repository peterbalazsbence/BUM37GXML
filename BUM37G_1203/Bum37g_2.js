$(document).ready(function () {

    $("#betolt2").click(function () {

        $.ajax({
            url: "Bum37g_orarend2.json",
            dataType: "json",
            success: function (adat) {

                let ki = "<h3>Heti órarend</h3>";

                adat.orarend.forEach(ora => {

                    ki += `
                        <div class="kartya">
                            <b>${ora.tantargy}</b><br>
                            ${ora.nap} ${ora.tol}-${ora.ig}<br>
                            Helyszín: ${ora.helyszin}<br>
                            Oktató: ${ora.oktato}<br>
                            Típus: ${ora.tipus}
                        </div>
                        <hr>
                    `;
                });

                $("#terulet2").html(ki);
            },

            error: function () {
                alert("Hiba a teljes órarend betöltésekor.");
            }
        });

    });

});
