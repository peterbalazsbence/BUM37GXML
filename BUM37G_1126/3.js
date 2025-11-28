$(function () {

    $("h1").on("mouseleave", function () {
        alert("Információ: a fejléc szövegéről elhúztad az egeret.\nSzöveg: " + $(this).text());
    });

    $("#katt1").on("click", function () {
        $(this).closest("li").hide();
    });

    $("#katt2").on("dblclick", function () {
        $(this).closest("li").hide();
    });

    $("#jelentkezes").on("mouseenter", function () {
        alert("Információs ablak: a Jelentkezés gomb fölé vitted az egeret.");
    });

    $(".adat").on("mousemove", function (e) {
        let lastY = $(this).data("lastY");
        if (lastY === undefined) {
            $(this).data("lastY", e.clientY);
            return;
        }

        if (e.clientY < lastY) {
            $(this).css("border", "2px solid red");
        } else if (e.clientY > lastY) {
            $(this).css("border", "2px solid blue");
        }
        $(this).data("lastY", e.clientY);
    });

    $(".adat").on("click", function () {
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color", randomColor);
    });


});
