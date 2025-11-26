$(document).ready(function () {

    const video = $("#myVideo")[0];

    $("#playBtn").click(function () {
        video.play();
    });

    $("#pauseBtn").click(function () {
        video.pause();
    });

    $("#back10").click(function () {
        video.currentTime -= 10;
    });

    $("#forward10").click(function () {
        video.currentTime += 10;
    });

    $("#muteBtn").click(function () {
        video.muted = !video.muted;
        $("#muteBtn").text(video.muted ? "🔊 Unmute" : "🔇 Mute");
    });

    $("#volUp").click(function () {
        if (video.volume < 1) video.volume += 0.1;
    });

    $("#volDown").click(function () {
        if (video.volume > 0) video.volume -= 0.1;
    });

    $("#speedUp").click(function () {
        video.playbackRate += 0.25;
    });

    $("#speedDown").click(function () {
        if (video.playbackRate > 0.25) {
            video.playbackRate -= 0.25;
        }
    });

});
