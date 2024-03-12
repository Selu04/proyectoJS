function redirectTo(url) {
    window.location.href = url;
}
function cerrarAnuncio() {
    var anuncio = document.getElementById('anuncio');
    var confirmDelete = confirm('¿Estás seguro de que quieres borrar este anuncio?');
    if (confirmDelete) {
        anuncio.parentNode.removeChild(anuncio);
    }
}
function aleatorio() {
    var locations = [
        "musica/rap.html",
        "musica/raggae.html",
        "musica/indie.html",
        "musica/electronica.html",
        "musica/pop.html",
    ];

    
    var randomIndex = Math.floor(Math.random() * locations.length);

    var randomLocation = locations[randomIndex];

    window.location.href = randomLocation;
};