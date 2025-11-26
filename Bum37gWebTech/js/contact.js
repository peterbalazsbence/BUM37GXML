$(document).ready(function () {

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let hiba = false;

        const nev = $("#nev");
        const email = $("#email");
        const latvany = $("#latvany");
        const regio = $("#regio");
        const datum = $("#datum");
        const uzenet = $("#uzenet");
        const rate = $("input[name='rate']:checked");
        const aszf = $("#aszf");

        $("small.hiba").text("");
        $("input, textarea, .radioBox, #aszf").removeClass("hibasMezo");

        if (nev.val().trim() === "") {
            nev.addClass("hibasMezo");
            nev.next(".hiba").text("Add meg a neved!");
            hiba = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val().trim())) {
            email.addClass("hibasMezo");
            email.next(".hiba").text("Érvénytelen email cím!");
            hiba = true;
        }

        if (latvany.val().trim() === "") {
            latvany.addClass("hibasMezo");
            latvany.next(".hiba").text("Add meg a látványosság nevét!");
            hiba = true;
        }

        if (regio.val().trim() === "") {
            regio.addClass("hibasMezo");
            regio.next(".hiba").text("Válaszd ki vagy írd be a régiót!");
            hiba = true;
        }

        if (datum.val().trim() === "") {
            datum.addClass("hibasMezo");
            datum.next(".hiba").text("Add meg a dátumot!");
            hiba = true;
        }

        if (uzenet.val().trim() !== "" && uzenet.val().trim().length < 5) {
            uzenet.addClass("hibasMezo");
            uzenet.next(".hiba").text("Ha írsz leírást, legyen legalább 5 karakter.");
            hiba = true;
        }

        if (rate.length === 0) {
            $(".radioBox").addClass("hibasMezo");
            $(".radioBox").next(".hiba").text("Válassz értékelést!");
            hiba = true;
        }

        if (!aszf.is(":checked")) {
            aszf.addClass("hibasMezo");
            aszf.next(".hiba").text("El kell fogadnod!");
            hiba = true;
        }

        if (hiba) return;

        $("#sikerUzenet").fadeIn(300);
        $("#contactForm")[0].reset();
    });

});
