const conductores="https://raw.githubusercontent.com/Cmenesess/DAWM/main/visitas.json";
const tileProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let myMap= L.map("mapa").setView([-2.18333,-79.8833],13)
L.tileLayer(tileProvider,{
    maxZoom:18,
}).addTo(myMap)
function marcadores(){
    fetch(urlVisitas)
    .then(function(response) { return response.json(); })
    .then(function(data){
        for(const conductor in data){
        let marker= L.marker(conductores[conductor]["posicion"]).addTo(myMap);
        let persona=conductores[conductor];
        marker.onmouseover = function() {mouseOver()};
        marker.addEventListener('mouseover',()=>{
            document.getElementsByClassName("Titulo")[0].classList+=" border-bottom";
            document.getElementsByClassName("card-body")[0].innerHTML='';
            var plantilla=`
            <h5 class="text-center">${conductor}</h5>
            <img class="card-img rounded-circle imagenes my-3" src=${persona.foto} alt="Card image cap">
            <p class="card-text text-center my-3">${persona.Descripcion1}</p>
            <p class="card-text text-center my-3">${persona.Descripcion2}</p>
            <div class="col-md-12 text-center" id="cont-boton">
                
            </div>
            `
            const elemento=document.createElement("button");
            elemento.innerHTML='Seguir'
            elemento.classList+="btn btn-primary";
            document.getElementsByClassName("card-body")[0].innerHTML+=plantilla;
            document.getElementById("cont-boton").appendChild(elemento);
            elemento.addEventListener("click",function(){
                if(elemento.classList.contains("activo")){
                    elemento.innerHTML="Seguir";
                    elemento.classList.remove("activo");
                }else{
                    elemento.innerHTML="Dejar de seguir"
                    elemento.classList+=" activo ";
                }
            });
            document.getElementsByClassName("carta")[0].classList.replace("carta","carta2")


        });
    }
}
function clickeable(boton){
    boton.tog
}
marcadores();