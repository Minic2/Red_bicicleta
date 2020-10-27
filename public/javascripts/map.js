var map = L.map('main_map').setView([-25.301196, -57.571490], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-25.300918, -57.571331]).addTo(map)
    .bindPopup('Vos sabes donde es kp.<br> F .')
    .openPopup();

