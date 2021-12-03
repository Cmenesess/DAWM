const seguidos="https://raw.githubusercontent.com/Cmenesess/DAWM/main/eNno/data/Conductores.json";
function conducSeguidos(){
    var numero_salidas=0;
    fetch(seguidos)
    .then(function(response) { return response.json(); })
    .then(function(data){
        for(const conductor in data){
            console.log(conductor);
            var datos=data[conductor];
            var plantilla1=`
            <div class="row py-5 justify-content-evenly border-bottom"">
                <div class="col-lg-2 col-md-5 col-sm-5 justify-content-center">
                    <div class="row flex-row justify-content-center">
                        <h3 class="text-center">${conductor}</h3>
                        <img src="${datos.foto}" class="img rounded-circle px-sm"  alt="">
                    </div>
                </div>
                <div id="salidas${numero_salidas}"class="col-lg-6 col-md-8 col-sm-10  py-3 ">
                </div>
            </div>
            `
            console.log(numero_salidas);
            document.getElementById("seguidos").innerHTML+=plantilla1;
            var salida=datos.proximasSalidas
            for(const salidas in datos.proximasSalidas){
                var plantilla2=`
                <p class="text-center">${salida[salidas][0]}</p>
                <div class="row_margin justify-content-center" id="cont">
                  <div class="pics  text-center col-lg-4 col-md-4 col-12  py-sm-1" >
                    <p>Disponible: </p>
                  </div>
                  <div class="pics text-center col-md-4 py-sm-1  col-sm-12 col-12" >
                    <p> ${salida[salidas][1]} asientos</p>
                  </div>
                  <div class="pics col-lg-3 py-1 border-end d-sm-block d-none " >
                    <p></p>
                  </div>
                  
                  <div class="text-center pics col-lg-3 py-sm-1 px-lg-3 px-md-1 px-sm-2 col-sm-12 pb-2" >
                    <button id="reservar" class="btn btn-primary">Reservar</button>
                  </div>
                `
                document.getElementById("salidas"+numero_salidas).innerHTML+=plantilla2;

            }
            numero_salidas++;
        }
    });
}
let buscador = ()=>{
    let buscar=document.getElementsByTagName("button")[0];
    buscar.addEventListener("click",()=>{
      let texto= document.getElementsByTagName("input")[0].value;
      if(texto.length>0){
        let noticias= document.querySelectorAll('div.row');
        for(let noticia of noticias){
          let textoDentro=noticia.querySelector("h3").innerHTML;
            if(!textoDentro.includes(texto)){
                noticia.classList+=' d-none';
            }else{
                noticia.classList.remove("d-none");
            }
        }
      }else{
        let noticias=document.querySelectorAll('div.row');
        for(let noticia of noticias){
            noticia.classList.remove("d-none");
        }
      }
    })
  }
buscador();
conducSeguidos();
