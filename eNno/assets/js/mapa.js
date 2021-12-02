const conductores={
    "Carlos Meneses":{
        "foto":"assets/img/Carlos1.png",
        "posicion":[-2.18333,-79.8833],
        "Descripcion1":"Salida: 11:30 am los martes,miercoles y jueves",
        "Descripcion2":"Capacidad maximo: 3 personas"
    },
    "Joel Alvarado":{
        "foto":"assets/img/Joel.png",
        "posicion":[ -2.1293,-79.9031],
        "Descripcion1":"Salida: 11:30 am los martes,miercoles y jueves",
        "Descripcion2":"Capacidad maximo: 2 personas"
    },
    "Luis Rodriguez":{
        "foto":"assets/img/Alfredo.png",
        "posicion":[-2.1629,-79.9389],
        "Descripcion1":"Salida: 11:30 am los martes,miercoles y jueves",
        "Descripcion2":"Capacidad maximo: 4 personas"
    },
    "Anguel Guale":{
        "foto":"assets/img/Guale.png",
        "posicion":[-2.16667,-79.8333],
        "Descripcion1":"Salida: 11:30 am los martes,miercoles y jueves",
        "Descripcion2":"Capacidad maximo: 4 personas"
    },
    "Estefano":{
        "foto":"assets/img/Estefano.png",
        "posicion":[-1.86667,-79.9833],
        "Descripcion1":"Salida: 11:30 am los martes,miercoles y jueves",
        "Descripcion2":"Capacidad maximo: 4 personas"
    }
};
const tileProvider="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
let myMap= L.map("mapa").setView([-2.18333,-79.8833],13)
L.tileLayer(tileProvider,{
    maxZoom:18,
}).addTo(myMap)
function marcadores(){
    for(const conductor in conductores){
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