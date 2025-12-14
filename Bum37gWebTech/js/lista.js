$(document).ready(function () {

    let selectedCard = null;
    let allSights = [];

    $.getJSON("data/latnivalok.json", function (data) {

        allSights = data.sights;

        renderData(allSights);

    }).fail(function () {
        console.error("Nem sikerült betölteni a data/latnivalok.json fájlt");
    });

    function renderData(sights) {

        const tableBody = $("#latTable tbody");
        const grid = $("#grid");

        tableBody.empty();
        grid.empty();

        sights.forEach(sight => {

            const row = `
                <tr>
                    <td>${sight.name}</td>
                    <td>${sight.city}</td>
                    <td>${sight.lat}, ${sight.lng}</td>
                </tr>
            `;
            tableBody.append(row);

            const imgUrl = sight.img ? sight.img : "images/placeholder.jpg";

            const card = $(`
                <div class="card"
                     data-lat="${sight.lat}"
                     data-lng="${sight.lng}"
                     data-name="${sight.name}">
                    <img src="${imgUrl}" alt="${sight.name}">
                    <h3>${sight.name}</h3>
                    <p>${sight.city}</p>
                    <button class="showOnMapBtn">Térképen</button>
                </div>
            `);

            grid.append(card);
        });
    }

    $("#searchInput").on("input", function () {

        const query = $(this).val().toLowerCase();

        const filteredSights = allSights.filter(sight =>
            sight.name.toLowerCase().includes(query) ||
            sight.city.toLowerCase().includes(query)
        );

        renderData(filteredSights);
    });

    $(document).on("click", ".card", function () {
        $(".card").removeClass("selected");
        $(this).addClass("selected");
        selectedCard = $(this);
    });

    $(document).on("click", ".showOnMapBtn", function (e) {
        e.stopPropagation();

        const card = $(this).closest(".card");

        const lat = card.data("lat");
        const lng = card.data("lng");
        const name = card.data("name");

        window.location.href = `latnivalok.html?lat=${lat}&lng=${lng}&name=${encodeURIComponent(name)}`;
    });

    $("#newcrdBtn").click(function () {
        const title = prompt("Mi legyen az új kártya címe?");

        if (!title || title.trim() === "") {
            alert("Nem adhatsz meg üres címet!");
            return;
        }

        const newCard = $(`
            <div class="card">
                <h3>${title.trim()}</h3>
                <p>A te látványosságod.</p>
            </div>
        `);

        $("#grid").prepend(newCard);
    });

    $("#modifyBtn").click(function () {

        if (!selectedCard) {
            alert("Előbb kattints egy kártyára, hogy kijelöld!");
            return;
        }

        const currentTitle = selectedCard.find("h3").text();
        const newTitle = prompt("Mi a látványosság neve?", currentTitle);

        if (!newTitle || newTitle.trim() === "") {
            alert("Nem adhatsz meg üres nevet!");
            return;
        }

        selectedCard.find("h3").text(newTitle.trim());
    });

});
