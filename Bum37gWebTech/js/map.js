const params = new URLSearchParams(window.location.search);
const focusLat = params.get("lat");
const focusLng = params.get("lng");
const focusName = params.get("name");

const map = L.map("map").setView([47.1625, 19.5033], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    minZoom: 6
}).addTo(map);

const blueIcon = L.icon({
    iconUrl: "images/marker-blue.svg",
    iconSize: [35, 35],
    iconAnchor: [17, 34],
    popupAnchor: [0, -32]
});

$.getJSON("data/latnivalok.json", function (data) {

    data.sights.forEach(place => {

        const popupHtml = `
            <strong style="font-size:18px;">${place.name}</strong><br>
            <span style="font-size:14px;">${place.city}</span><br><br>
            <img src="${place.img}" width="200" style="border-radius:6px;">
        `;

        const marker = L.marker([place.lat, place.lng], { icon: blueIcon }).addTo(map);
        marker.bindPopup(popupHtml);

        if (
            focusLat &&
            focusLng &&
            parseFloat(focusLat) === place.lat &&
            parseFloat(focusLng) === place.lng
        ) {
            map.setView([place.lat, place.lng], 12);
            marker.openPopup();
        }

        marker.on("popupopen", function (e) {
            const popupEl = e.popup.getElement();
            popupEl.classList.add("leaflet-popup-open");
        });

        marker.on("click", function () {
            map.flyTo([place.lat, place.lng], 12, {
                duration: 0.6
            });
        });

    });

});
