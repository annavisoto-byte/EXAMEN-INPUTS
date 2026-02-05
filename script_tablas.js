var contenedor = document.getElementById("contenedor");

var j = 1;
var i;
var html = "";

var coloresTitulo = [
    "#b71c1c", "#ff6f00", "#f9a825", "#33691e",
    "#00695c", "#01579b", "#1a237e", "#4a148c",
    "#880e4f", "#3e2723", "#263238", "#5d4037",
    "#d81b60", "#43a047", "#00acc1", "#3949ab",
    "#fb8c00", "#6d4c41", "#546e7a", "#c0ca33"
];

while (j <= 20) {
    html += "<div class='tabla'>";
    html += "<div class='titulo' style='background-color:" + coloresTitulo[j - 1] + "'>Tabla del " + j + "</div>";

    i = 1;
    while (i <= 10) {
        html += "<p>" + j + " x " + i + " = <strong>" + (j * i) + "</strong></p>";
        i++;
    }

    html += "</div>";
    j++;
}
contenedor.innerHTML = html;