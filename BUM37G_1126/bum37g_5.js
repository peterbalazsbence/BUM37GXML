$(function () {

    $("#startAnim").on("click", function () {

        let d = $("#doboz");

        d.css({
            left: "0px",
            top: "0px",
            width: "300px",
            height: "300px",
            fontSize: "12pt",
            opacity: "1"
        });

        d.animate({
            left: "400px",
            width: "400px",
            fontSize: "30pt"
        }, 1000)

        .animate({
            top: "200px",
            width: "300px",
            height: "330px"   // +10%
        }, 1000)

        .animate({
            left: "0px",
            opacity: 0.4
        }, 1000)

        .animate({
            top: "0px",
            width: "300px",
            height: "300px",
            opacity: 1,
            fontSize: "12pt"
        }, 1000, function () {
            alert("VÉGE");
        });

    });



    $("#hideP").on("click", function () {
        $(".bk").hide();
        $("#doboz").css("margin-top", "0px");
        alert("Bekezdések elrejtése");
    });



    $("#toggleBox").on("click", function () {

        $("#doboz").animate({
            width: "toggle",
            height: "toggle",
            opacity: "toggle"
        }, 700);

    });

});
