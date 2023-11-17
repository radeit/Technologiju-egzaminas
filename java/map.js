var map = L.map('map').setView([54.68768577815007, 25.2770856715584], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([54.68768577815007, 25.2770856715584]).addTo(map);

function MousePos(event) {
    console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
}

document.addEventListener("click", MousePos);
