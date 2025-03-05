document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        alert("💌 Hey! There’s a special message waiting for you! ❤️");
    }, 2000);
});

function submitConfession() {
    let confession = document.getElementById("confession").value;
    if (confession.trim() === "") {
        alert("Please write something!");
    } else {
        alert("Confession submitted anonymously!");
        document.getElementById("confession").value = "";
    }
}
