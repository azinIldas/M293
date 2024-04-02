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
document.addEventListener('DOMContentLoaded', function () {
    // Erhalte alle Links in der Navigationsleiste
    var links = document.querySelectorAll('nav ul li a');
    
    // Durchlaufe alle Links und setze die Klasse 'active' auf den Link, der der aktuellen URL entspricht
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var modal = document.getElementById('confirmationModal');
    var span = document.getElementsByClassName("close-button")[0];

    // Funktion, um Fehlermeldungen zu setzen
    function setErrorMessage(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    form.onsubmit = function(e) {
        e.preventDefault(); // Verhindert das Senden des Formulars
        var isValid = true;
        
        // Fehlermeldungen zurücksetzen
        setErrorMessage('firstNameError', '');
        setErrorMessage('lastNameError', '');
        // ... Setze dies für alle Fehlermeldungen fort ...

        // Validierung der Felder
        if (!form.firstName.value.match(/^[a-zA-ZäöüÄÖÜß\s-]+$/)) {
            setErrorMessage('firstNameError', 'Bitte geben Sie einen gültigen Vornamen ein (nur Buchstaben).');
            isValid = false;
        }

        if (!form.lastName.value.match(/^[a-zA-ZäöüÄÖÜß\s-]+$/)) {
            setErrorMessage('lastNameError', 'Bitte geben Sie einen gültigen Nachnamen ein (nur Buchstaben).');
            isValid = false;
        }

        if (!form.email.value.match(/^[^@]+@[^@]+\.[a-zA-ZäöüÄÖÜß]{2,}$/)) {
            setErrorMessage('emailError', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            isValid = false;
        }

        if (isValid) {
            var timestamp = new Date().toISOString();
            console.log('Formular gesendet um: ' + timestamp);
            console.log('Formulardaten:', {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                phone: form.phone.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value,
                timestamp: timestamp // Zeitstempel für das Log
            });

            // Zeige das Modal
            modal.style.display = "block";

            // Formular zurücksetzen
            form.reset();
        }
    };

    // Wenn der Benutzer auf (x) klickt, schließe das Modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Wenn der Benutzer irgendwo außerhalb des Modals klickt, schließe es
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Aktive Links hervorheben
    var links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
