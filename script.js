

/* 1. VALIDATION FORMULAIRE RDV*/
function validerRDV() {
    var nom = document.getElementById("nom").value;
    var telephone = document.getElementById("telephone").value;
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;
    var heure = document.getElementById("heure").value;

    // Validation du nom (au moins 3 caracteres)
    if (nom.length < 3) {
        alert("Le nom doit contenir au moins 3 caracteres.");
        return false;
    }

    // Validation du telephone (format marocain : 0[5-7]XXXXXXXX)
    var telRegex = /^(0[5-7][0-9]{8})$/;
    if (!telRegex.test(telephone)) {
        alert("Veuillez entrer un numero de telephone valide (ex: 0612345678).");
        return false;
    }

    // Validation du service
    if (service == "") {
        alert("Veuillez selectionner un service.");
        return false;
    }

    // Validation de la date (pas dans le passe)
    var dateChoisie = new Date(date);
    var aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);

    if (dateChoisie < aujourdhui) {
        alert("La date ne peut pas etre dans le passe.");
        return false;
    }

    // Validation du dimanche (getDay() == 0)
    var jourSemaine = dateChoisie.getDay();
    if (jourSemaine == 0) {
        alert("Le centre est ferme le dimanche. Veuillez choisir un autre jour.");
        return false;
    }

    // Validation de l heure
    if (heure == "") {
        alert("Veuillez selectionner une heure.");
        return false;
    }

    // Tout est valide : afficher confirmation
    document.getElementById("rdvForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";

    return false;  // empeche l envoi reel du formulaire
}

/*  2. VALIDATION FORMULAIRE CONTACT */
function validerContact() {
    var nom = document.getElementById("nomContact").value;
    var email = document.getElementById("emailContact").value;
    var sujet = document.getElementById("sujet").value;
    var message = document.getElementById("message").value;

    // Validation du nom
    if (nom.length < 2) {
        alert("Le nom est trop court.");
        return false;
    }

    // Validation de l email (presence de @ et . )
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    // Validation du sujet
    if (sujet.length < 3) {
        alert("Le sujet doit contenir au moins 3 caracteres.");
        return false;
    }

    // Validation du message
    if (message.length < 10) {
        alert("Le message doit contenir au moins 10 caracteres.");
        return false;
    }

    // Tout est valide
    alert("Votre message a bien ete envoye ! Nous vous repondrons dans les plus brefs delais.");

    // Reinitialiser le formulaire
    document.getElementById("contactForm").reset();

    return false;  // empeche l envoi reel
}



