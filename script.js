var x = 25;
var prenom = "Ivan"
var nom = "de Villers"
var age = 36;
var ville = "";
ville = "Manage"
var genre = "";
genre = "Homme"

// let quest1 = prompt("es tu " + prenom + "? ")
// if (quest1 == "oui"){
//     alert("Salut " + prenom)
// }
// else {
//     prenom = prompt("quel est ton prénom?");
//     alert("Salut " + prenom)
// }

document.getElementById('Name').innerHTML = prompt("votre nom ? : tutu")
// Date
function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showTime()',t)
}

function showTime() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('txt').innerHTML = time;
    refresh();
}


