$(document).ready(function () {

    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        let error = false;

        const name = $("#name");
        const email = $("#email");
        const sight = $("#sight");
        const region = $("#region");
        const date = $("#date");
        const msg = $("#msg");
        const rate = $("input[name='rate']:checked");
        const acceptCond = $("#acceptCond");

        $("small.error").text("");
        $("input, textarea, .radioBox, #acceptCond").removeClass("faultyLine");

        if (name.val().trim() === "") {
            name.addClass("faultyLine");
            name.next(".error").text("Add meg a neved!");
            error = true;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.val().trim())) {
            email.addClass("faultyLine");
            email.next(".error").text("Érvénytelen email cím!");
            error = true;
        }

        if (sight.val().trim() === "") {
            sight.addClass("faultyLine");
            sight.next(".error").text("Add meg a látványosság nevét!");
            error = true;
        }

        if (region.val().trim() === "") {
            region.addClass("faultyLine");
            region.next(".error").text("Válaszd ki vagy írd be a régiót!");
            error = true;
        }

        if (date.val().trim() === "") {
            date.addClass("faultyLine");
            date.next(".error").text("Add meg a dátumot!");
            error = true;
        }

        if (msg.val().trim() !== "" && msg.val().trim().length < 5) {
            msg.addClass("faultyLine");
            msg.next(".error").text("Ha írsz leírást, legyen legalább 5 karakter.");
            error = true;
        }

        if (rate.length === 0) {
            $(".radioBox").addClass("faultyLine");
            $(".radioBox").next(".error").text("Válassz értékelést!");
            error = true;
        }

        if (!acceptCond.is(":checked")) {
            acceptCond.addClass("faultyLine");
            acceptCond.next(".error").text("El kell fogadnod!");
            error = true;
        }

        if (error) return;

        $("#successMsg").fadeIn(300);
        $("#contactForm")[0].reset();
    });

});
