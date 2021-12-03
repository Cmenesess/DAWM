
for(var cancelar of document.getElementsByClassName("button-deny")){  
    cancelar.addEventListener('click',evento);
}
function evento(event)
{
   event.target.parentNode.classList+=" d-none";
}

