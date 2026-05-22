
PROJET WEB - CENTRE DE BEAUTE
Belle Étoile - Prise de Rendez-vous
GROUPE 3, G.I.

AUTEURS:
[RABII ASSYA]-[2319000]
[MERIEM ROUKIANE]-[2319429]

SUJET CHOISI:
Site web statique pour un centre de beauté fictif "Belle Étoile" 
permettant la présentation des services et la prise de rendez-vous en ligne.

REPARTITION DES TACHES (binôme):
- [MERIEM ROUKIANE] : Structure HTML, contenu des pages
- [RABII ASSYA] : CSS, design responsive et JavaScript

STRUCTURE DU SITE:
- index.html      : Page d'accueil avec présentation et horaires
- apropos.html    : Histoire, valeurs et équipe
- services.html   : Liste des prestations et tarifs
- rendezvous.html : Formulaire de prise de rendez-vous (page bonus)
- contact.html    : Formulaire de contact

FONCTIONNALITES JAVASCRIPT:
1. Validation complète du formulaire de rendez-vous (nom, téléphone, date, heure)
2. Validation du formulaire de contact (email, longueur des champs)
3. Effet visuel : changement de couleur du header au défilement
4. Messages d'alerte et de confirmation

TECHNOLOGIES UTILISEES:
- HTML5 (structure sémantique)
- CSS3 (flexbox, pseudo-classes, responsive design)
- JavaScript vanilla (validation, événements, DOM)

REMARQUES:
- Site fonctionnant en local sans serveur.
- Ce qui est ajoutée : 
  -> box-shadow: 0 3px 10px rgba(0,0,0,0.05) : Ajoute une ombre autour d’un élément.
       0 → déplacement horizontal de l’ombre
      3px → déplacement vertical vers le bas
      10px → flou de l’ombre
      rgba(0,0,0,0.05) → couleur noire avec une transparence de 0.05 (ombre très légère)
      Résultat : une petite ombre douce pour donner un effet moderne et élégant.
  ->background: linear-gradient(135deg, #d4a5a5 0%, #c9b1b1 100%) : Crée un dégradé de couleur.

       linear-gradient → dégradé linéaire
       135deg → direction du dégradé (en diagonale)
       #d4a5a5 0% → première couleur au début
       #c9b1b1 100% → deuxième couleur à la fin
       Résultat : un fond dégradé doux rose/beige élégant
  -> vertical-align: top : Aligne l’élément en haut par rapport aux autres éléments sur la même ligne.
      Résultat : plusieurs blocs commencent tous au même niveau en haut.
  -> var telRegex = /^(0[5-7][0-9]{8})$/; Validation du téléphone
     Regex = expression régulière
     Sert à vérifier un format.
  -> aujourdhui.setHours(0, 0, 0, 0);
     Met l’heure à : 00:00:00
     pour comparer seulement les dates.
  ->placeholder placeholder="Nom et prenom"
    Explication
    Texte affiché temporairement dans le champ
  ->if (window.pageYOffset > 50) {
    window:représente la fenêtre du navigateur.
    pageYOffset:donne combien de pixels l’utilisateur a descendu.
          0 → en haut de la page
     veut dire : si l’utilisateur descend plus de 50px.
   -> header.style.background = "linear-gradient(...)"; Modifie le fond CSS du header.
   et linear-gradient : Crée un dégradé de couleurs.



