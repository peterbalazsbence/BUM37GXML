$(document).ready(function () {

    let selectedcard = null;

    $.getJSON("data/latnivalok.json", function (data) {

        const tabla = $("#latTable tbody");
        const grid = $("#grid");

        data.sights.forEach(place => {

            const row = `
                <tr>
                    <td>${place.name}</td>
                    <td>${place.city}</td>
                    <td>${place.lat}, ${place.lng}</td>
                </tr>
            `;
            tabla.append(row);

            const imgUrl = place.img ? place.img : "images/placeholder.jpg";

            const card = $(`
                <div class="card">
                    <img src="${imgUrl}" alt="${place.name}">
                    <h3>${place.name}</h3>
                    <p>${place.city}</p>
                </div>
            `);

            grid.append(card);
        });

    }).fail(function () {
        console.error("Nem sikerült betölteni a data/latnivalok.json fájlt");
    });

    $(document).on("click", ".card", function () {
        $(".card").removeClass("selected");
        $(this).addClass("selected");
        selectedcard = $(this);
    });

    $("#newcrdBtn").click(function () {
        const title = prompt("Mi legyen az új kártya címe?");

        if (!title || title.trim() === "") {
            alert("Nem adhatsz meg üres címet!");
            return;
        }

        const newcard = $(`
            <div class="card">
                <h3>${title.trim()}</h3>
                <p>A te látványosságod.</p>
            </div>
        `);

        $("#grid").prepend(newcard);
    });

    $("#modifyBtn").click(function () {

        if (!selectedcard) {
            alert("Előbb kattints egy kártyára, hogy kijelöld!");
            return;
        }

        const currentTitle = selectedcard.find("h3").text();
        const newTitle = prompt("Mi a látványosság neve?", currentTitle);

        if (!newTitle || newTitle.trim() === "") {
            alert("Nem adhatsz meg üres nevet!");
            return;
        }

        selectedcard.find("h3").text(newTitle.trim());
    });

});
