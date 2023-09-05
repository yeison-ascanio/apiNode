var mymap = L.map('map').setView([7.898154, -72.488699], 13);

L.tilelayer('https://{s}.tileopenstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Contributors, images'
}).addTo(mymap);

L.maker([7.897989, -72.488597]).addTo(mymap);
L.maker([7.888153, -72.496070]).addTo(mymap);
L.maker([7.903779, -72.491404]).addTo(mymap);