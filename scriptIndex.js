// Abrir menú lateral
function openNav() {
    document.getElementById("sidebar").style.width = "280px";
    document.getElementById("main-overlay").style.display = "block";
}

// Cerrar menú lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main-overlay").style.display = "none";
}

// Lógica para desplegar "Radios (UHF, VHF, HF)"
var dropdown = document.getElementsByClassName("dropdown-btn");
for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}