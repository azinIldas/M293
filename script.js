document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var modal = document.getElementById('confirmationModal');
    var span = document.getElementsByClassName("close-button")[0];

    form.onsubmit = function(e) {
        e.preventDefault(); // Verhindert das Senden des Formulars
        
        // Zeige das Modal
        modal.style.display = "block";

        // Formular zurücksetzen
        form.reset();
    };

    // Wenn der Benutzer auf (x) klickt, schließe das Modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Wenn der Benutzer irgendwo außerhalb des Modals klickt, schließe es
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});