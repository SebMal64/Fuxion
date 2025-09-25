function toogleNav() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}



function barraScroll () {
    //referencia al id
    const $barra = document.getElementById("progress");
    //desplazamiento vertical de la ventana
    let vertical = window.scrollY;
    //Tamaño total del documento
    let Final = document.body.scrollHeight;
    //tamanño total
    let totalScroll = Final- window.innerHeight;
    let porcentaje = (vertical * 100)/totalScroll;
    $barra.style.width = `${porcentaje}%`

}
document.addEventListener('scroll', barraScroll);






function mostrar(){
    document.getElementById("card").style.display="block";
}
function ocultar(){
    document.getElementById("card").style.display="none";
    document.getElementById("overlay").style.display="none";
}



function mostrarCard(projectId) {
    document.getElementById("overlay").style.display="block";

    var item = proyectos.find(p => p.id === projectId);
    document.getElementById("card").style.display="block";

    var imgElement = document.getElementById("card-img");
    imgElement.src = item.image;
    imgElement.alt = item.title;
//insert data one by one
    document.getElementById("card-head").innerText = item.title;
    document.getElementById("card-p").innerText = item.description;
     let tagsHtml = "";
    item.tags.forEach(tag => {
        tagsHtml += `<span class="rounded uppercase bg-blue-100 p-3 inline-block mr-2 mb-2">${tag}</span>`;
    });
    document.getElementById("card-tags").innerHTML = tagsHtml;
    document.getElementById("location-card").innerHTML = 
    `<span id="location-card"><img src="fuxion-pictures/iconos/marker.svg" alt="cross" class="text-sm w-5 h-5 inline-block mr-2">${item.location}
</span>`
}