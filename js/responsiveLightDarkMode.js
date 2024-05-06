var stylesheet = document.getElementById("stylesheet");
var blobcat = document.getElementById("blobcat");
var blobstatus = document.getElementById("blob_status");
var blobmood = document.getElementById("blob_mood");

var hour = new Date().getHours();
if(hour > 6 && hour < 20) {
    stylesheet.setAttribute("href", "style/light.css");
    blobcat.setAttribute("src", "img/light/blobbingo.svg");
    blobstatus.textContent = "obudzony";
    blobmood.textContent = "gotów do pracy! •⩊•";
} else {
    stylesheet.setAttribute("href", "style/dark.css");
    blobcat.setAttribute("src", "img/dark/blobbingo.svg");
    blobstatus.textContent = "spanko";
    blobmood.textContent = "nie przeszkadzać -˕-";
}
