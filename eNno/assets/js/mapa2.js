const tileProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let myMap= L.map("mapa").setView([-2.18333,-79.8833],13)
L.tileLayer(tileProvider,{
    maxZoom:18,
}).addTo(myMap)
function onMapClick(e) {
    myMap.eachLayer(function(layer){
        if (layer instanceof L.Marker) {
            myMap.removeLayer(layer);
        }
    });
    var coordernadas= e.latlng;
    var arreglo=[];
    arreglo.push(coordernadas.lat);
    arreglo.push(coordernadas.lng);
    var marker = L.marker(arreglo).addTo(myMap);
    marker.bindPopup("Esta es la direccion <br>que se mostrara a los pasajeros.").openPopup();
}

myMap.on('click', onMapClick);