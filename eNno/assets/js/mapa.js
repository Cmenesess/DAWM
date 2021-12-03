const conductores="https://raw.githubusercontent.com/Cmenesess/DAWM/main/eNno/data/info.pagina.json";
const tileProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let myMap= L.map("mapa").setView([-2.18333,-79.8833],13)
L.tileLayer(tileProvider,{
    maxZoom:18,
}).addTo(myMap)

function marcadores(){
    fetch(conductores)
    .then(function(response) { return response.json(); })
    .then(function(data){
        for(const conductor in data){

            let marker= L.marker(data[conductor]["posicion"]).addTo(myMap);
            let persona=data[conductor];
            marker.onmouseover = function() {mouseOver()};
            marker.addEventListener('mouseover',()=>{
                var cambio_grip=document.getElementsByClassName("carta")[0]
                if(typeof cambio_grip != 'undefined'){
                    cambio_grip.classList.replace("carta","carta2");
                }
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


            });
        }
    })
}
function clickeable(boton){
    boton.tog
}
marcadores();