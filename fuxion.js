document.getElementById("card").style.display="none";
function mostrar(){
    document.getElementById("card").style.display="block";
}
function ocultar(){
    document.getElementById("card").style.display="none";
}

function mostrarCard() {
    document.getElementById("card").style.display="block";
    document.getElementById("card-head").innerText = proyectos["proyect1"].title;
    document.getElementById("card-p").innerText = proyectos["proyect1"].description;
    document.getElementById("location-card").innerHTML = `<img src="fuxion-pictures/marker.svg" alt="cross" class=" w-5 h-5 inline-block mr-2">ubicacion, ${proyectos["proyect1"].location}`;
    document.getElementById("btn-card").innerHTML = `<img src="fuxion-pictures/cross.svg" alt="cross"`;
}