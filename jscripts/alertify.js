var currentDate = new Date();

var formattedDate = currentDate.toLocaleString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });

function inicio() {
    var message = 'Sesión Iniciada con éxito el ' + formattedDate;

    alertify.alert(message).set({onshow:null, onclose:function(){ window.location.href = 'principal/index.html'}}); 
    
    setTimeout(function() {
        window.location.href = 'principal/index.html';
    }, 3000); 
}
function registro() {
    var message = 'Registro con éxito el ' + formattedDate;

    alertify.alert(message).set({onshow:null, onclose:function(){ window.location.href = 'principal/index.html'}}); 
    
    setTimeout(function() {
        window.location.href = 'principal/index.html';
    }, 3000); 
}