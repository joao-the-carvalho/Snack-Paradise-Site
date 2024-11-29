
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});

let contador = 1;
    setInterval(() => {
        document.getElementById('imagem' + contador).checked = true;
        contador++;
        if (contador > 3) {
           contador = 1;}
        }, 3000);