$(function () {

    $("#szamol").on("click", function () {

        let a = $("#a").val();
        let b = $("#b").val();
        let muvelet = $("input[name='muvelet']:checked").val();

        if (a === "" || b === "") {
            alert("Mindkét számot meg kell adni!");
            return;
        }

        if (isNaN(a) || isNaN(b)) {
            alert("Csak számot adhat meg!");
            return;
        }

        a = parseInt(a);
        b = parseInt(b);

        if (!muvelet) {
            alert("Válasszon egy műveletet!");
            return;
        }

        if (muvelet === "oszt" && b === 0) {
            alert("0-val nem lehet osztani!");
            return;
        }

        let eredmeny = 0;

        switch (muvelet) {
            case "szor":
                eredmeny = a * b;
                break;

            case "oszt":
                eredmeny = a / b;
                break;

            case "osszead":
                eredmeny = a + b;
                break;

            case "kivon":
                eredmeny = a - b;
                break;
        }

        $("#eredmeny").text(eredmeny);
    });

});
