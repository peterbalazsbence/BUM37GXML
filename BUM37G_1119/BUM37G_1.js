$(document).ready(function(){
    $("#hideButton").click(function(){
        $("#paragraph1, #paragraph2").hide();
    });

    $("#externalLink").click(function(){
        window.open($(this).attr('href'), '_blank');
    });
});
