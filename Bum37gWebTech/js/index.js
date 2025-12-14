$(document).ready(function () {

    let allSights = [];

    $.getJSON("data/latnivalok.json", function (data) {

        allSights = data.sights;

        const randomSight = allSights[Math.floor(Math.random() * allSights.length)];
        renderFeatured(randomSight);

    });

    function renderFeatured(sight) {

        const imgSrc = sight.img && sight.img.trim() !== ""
            ? sight.img
            : "images/placeholder.jpg";

        const html = `
            <div class="indexcard">
                <img src="${imgSrc}"
                     alt="${sight.name}"
                     onerror="this.src='images/placeholder.jpg'">
                <h3>${sight.name}</h3>
                <p>${sight.city}</p>
                <button class="showOnMapBtn"
                    data-lat="${sight.lat}"
                    data-lng="${sight.lng}"
                    data-name="${sight.name}">
                    Megjelenítés térképen
                </button>
            </div>
        `;

        $("#featuredContainer").html(html);
    }

    $(document).on("click", ".showOnMapBtn", function () {

        const lat = $(this).data("lat");
        const lng = $(this).data("lng");
        const name = $(this).data("name");

        window.location.href = `latnivalok.html?lat=${lat}&lng=${lng}&name=${encodeURIComponent(name)}`;
    });

    $("#randomBtn").click(function () {

        const randomSight = allSights[Math.floor(Math.random() * allSights.length)];

        window.location.href = `latnivalok.html?lat=${randomSight.lat}&lng=${randomSight.lng}&name=${encodeURIComponent(randomSight.name)}`;
    });

});
