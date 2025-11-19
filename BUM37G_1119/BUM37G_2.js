$(document).ready(function () {

    $("#K1").click(function () {
        $("ul:first li:lt(2)").hide();
        $("#externalLink").attr("href", "#");
    });

    $("#K2").click(function () {
        $("ul:first li:lt(2)").hide();
        $("#externalLink").attr("href", "#");
        $("#K2").hide();
    });

    $("#K3").click(function () {
        $("h1").hide();
        $("ul:first li:lt(2)").hide();
        $("#externalLink").attr("href", "#");
    });

    $("#K4").click(function () {
        $("ul:first li:lt(2)").hide();
        $("#externalLink").text("").attr("href", "#");
    });

    $("#K5").click(function () {
        $("ul:first li:lt(2)").hide();
        $("#externalLink").attr("href", "#");
        $("table tr:even").hide();
    });

});
