document.getElementById("card").style.display="none";
function mostrar(){
    document.getElementById("card").style.display="block";
}
function ocultar(){
    document.getElementById("card").style.display="none";
}

function mostrarCard(projectId) {
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
        tagsHtml += `<span class="rounded bg-blue-100 p-3 inline-block mr-2 mb-2">${tag}</span>`;
    });
    document.getElementById("card-tags").innerHTML = tagsHtml;
    document.getElementById("location-card").innerHTML = 
    `<span id="location-card"><img src="fuxion-pictures/iconos/marker.svg" alt="cross" class="text-sm w-5 h-5 inline-block mr-2">${item.location}
</span>`
}