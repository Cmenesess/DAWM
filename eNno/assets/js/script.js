const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  text_1 = document.getElementById('ingreso-name1')
  text_2 = document.getElementById('ingreso-name2')
  if(text_1.value.length>0 && text_2.value.length>0){
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }else{
    alert("¡Debe llenar todos los campos!")
  }
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  text_1 = document.getElementById('ingreso-email')
  text_2 = document.getElementById('ingreso-phone')
  if(text_1.value.length>0 && text_2.value.length>0){
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }else{
    alert("¡Debe llenar todos los campos!")
  }
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  text_1 = document.getElementById('ingreso-date')
  text_2 = document.getElementById('ingreso-gender')
  if(text_1.value.length>0 && text_2.value.length>0){
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }else{
    alert("¡Debe llenar todos los campos!") 
  }
});
submitBtn.addEventListener("click", function(){
  text_1 = document.getElementById('ingreso-user')
  text_2 = document.getElementById('ingreso-password')
    if(text_1.value.length>0 && text_2.value.length>0){
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(() => {
      window.location.replace("index.html")
    }, 10);
    alert("Su formulario se ha registrado con éxito");
  }else{
    alert("¡Debe llenar todos los campos!") 
  }
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});


