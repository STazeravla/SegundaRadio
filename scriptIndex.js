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




function mostrarCategoria(idCategoria) {
    // 1. Buscamos todas las secciones de productos
    const secciones = document.querySelectorAll('.product-section');
    
    // 2. Las ocultamos todas
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    // 3. Mostramos solo la que nos interesa
    const seleccionada = document.getElementById(idCategoria);
    if (seleccionada) {
        seleccionada.style.display = 'block';
    }
    
    // 4. Cerramos el menú lateral automáticamente
    closeNav();
}