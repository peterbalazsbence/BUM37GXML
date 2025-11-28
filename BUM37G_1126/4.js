$(function () {


    $("#hideText").on("click", function () {
        $("#p1, #p2, #p3").hide();
    });

    $("#showText").on("click", function () {
        $("#p1, #p2, #p3").show();
    });

    $("#toggleText").on("click", function () {
        $("#p1, #p2, #p3").toggle();
    });



    $("#op01").on("click", function () {
        $("#urlap").css("opacity", 0.1);
    });

    $("#op05").on("click", function () {
        $("#urlap").css("opacity", 0.5);
    });

    $("#op08").on("click", function () {
        $("#urlap").css("opacity", 0.8);
    });




    $("#formHide").on("click", function () {
        $("#urlap").hide();
    });

    $("#formShow").on("click", function () {
        $("#urlap").show();
    });

    $("#formToggle").on("click", function () {
        $("#urlap").toggle();
    });

});
