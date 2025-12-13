
const map = L.map('map').setView([47.1625, 19.5033], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 6
}).addTo(map);

const blueIcon = L.icon({
    iconUrl: 'images/marker-blue.svg',
    iconSize: [35, 35], 
    iconAnchor: [17, 34], 
    popupAnchor: [0, -32]
});

$.getJSON('data/latnivalok.json', function(data) {

    data.sights.forEach(place => {

        const marker = L.marker([place.lat, place.lng], { icon: blueIcon }).addTo(map);

        const popupHtml = `
            <strong style="font-size:18px;">${place.name}</strong><br>
            <span style="font-size:14px;">${place.varos}</span><br><br>
            <img src="${place.kep}" width="200" style="border-radius:6px;">
        `;

        marker.bindPopup(popupHtml);

        marker.on("popupopen", function(e) {
            const popupEl = e.popup.getElement();
            popupEl.classList.add("leaflet-popup-open");
        });

        marker.on("click", function() {
            map.flyTo([place.lat, place.lng], 12, {
                duration: 0.6
            });
        });

        marker.bindPopup(popupHtml);
    });

});
