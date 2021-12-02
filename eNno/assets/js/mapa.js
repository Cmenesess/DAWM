const tileProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let myMap= L.map("map").setView([-2.18333,-79.8833],13)
L.tileLayer(tileProvider,{
    maxZoom:18,
}).addTo(myMap)
let marker= L.marker([-2.18333,-79.8833]).addTo(myMap);
marker.onmouseover = function() {mouseOver()};
marker.addEventListener('mouseover',()=>{
    document.getElementsByClassName("Titulo")[0].classList+=" border-bottom";
    document.getElementsByClassName("card-body")[0].innerHTML='';
    var plantilla=`
    <h5 class="text-center">Joel Alvarado</h5>
    <img class="card-img-top rounded-circle imagenes my-3" src="assets/img/Joel.png" alt="Card image cap">
    <p class="card-text text-center my-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div class="col-md-12 text-center">
            <button type="button" class="btn btn-primary">Seguir</button>
        </div>
    `
    document.getElementsByClassName("card-body")[0].innerHTML+=plantilla;
})
