// ## Enoncé
//
// Construire un programme affichant un rectangle de couleur qui réagit à différentes interactions avec la souris de l'utilisateur.
//
// ## Consignes
//
// ### HTML
//
// Dans l'en-tête de la page :
//
// - Ajouter un titre au programme : "Gestion de la Souris".
// - Créer un bouton (*id : toggle-rectangle*) ayant pour intitulé "Cacher / Afficher le rectangle".
//
// Dans la partie principale de la page :
//
// - Ajouter des paragraphes de texte expliquant ce que le programme peut faire (lire ci-dessous les interactions).
// - Créer une balise **div** vide (*class : rectangle*) pour le rectangle.
//
// ### CSS
//
// - Le rectangle est bleu (*royalblue*), de taille 400x300 pixels et possède des coins arrondis.
// - Lorsqu'on applique la classe *good* en plus au rectangle, il devient vert (*limegreen*).
// - Lorsqu'on applique la classe *important* en plus au rectangle, il devient rouge (*firebrick*).
// - Le changement de couleur du rectangle doit s'animer.
// - Ajouter le CSS nécessaire restant pour que le programme fonctionne.
//
// ### Interactions
//
// - Quand on clique sur le bouton *toggle-rectangle*, cela cache ou affiche le rectangle.
// - Quand la souris se déplace à l'intérieur du rectangle il devient rouge; il reprend sa couleur originale quand la souris n'est plus dedans.
// - Quand on double-clique sur le rectangle il devient vert.
//
// ## Remarques
//
// - organiser le code en trois parties : les variables, les fonctions et enfin le code principal.
// - Nommer correctement les fonctions des gestionnaires d'évènements pour qu'elles aient un sens.
//
// --------------------------------------------------------
//
//
// 1/ Cibler l'élement sur lequel on veut détecter un evenement utilisateur
// 2/ Poser un écouteur d'évenement sur cet element
// 3/ creer la fonction qui sera appelée quand l'évenement est détecté



//1 selectionne l'élément sur lequel je pose un écouteur d'évenement
var button = document.getElementById('button');
var rectangle = document.getElementById('rectangle');

//3 Créer la fonction qui est appelé quand l'évenement est détecter (afficherMasquer)
function afficherCacher() {
    rectangle.classList.toggle('hide');
}
function changementCouleurFirebrickSurvol() {
    rectangle.classList.add('important');
}
function changementCouleurOrigineSurvol() {
    rectangle.classList.remove('important');
}
function changementCouleurLimegreenDoubleClick() {
    rectangle.classList.toggle('good');
}

//2 Je pose l'écouteur d'évenement
button.addEventListener('click', afficherCacher);
rectangle.addEventListener('dblclick', changementCouleurLimegreenDoubleClick);
rectangle.addEventListener('mouseout', changementCouleurOrigineSurvol);
rectangle.addEventListener('mouseenter', changementCouleurFirebrickSurvol);




//Correction

// var button;
// var rectangle;
// // Recherche du bouton et du rectangle dans l'arbre DOM.
// button    = document.getElementById('toggle-rectangle');
// rectangle = document.querySelector('.rectangle');
//
//
//
// /***********************************************************************************/
// /* ********************************** FONCTIONS ************************************/
// /***********************************************************************************/
//
// function onClickButton()
// {
//     // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
//     rectangle.classList.toggle('hide');
// }
//
// function onDoubleClickRectangle()
// {
//     // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
//     rectangle.classList.toggle('good');
// }
//
// function onMouseOutRectangle()
// {
//     // La méthode .remove() va supprimer la classes.
//     rectangle.classList.remove('good');
//     rectangle.classList.remove('important');
// }
//
// function onMouseOverRectangle()
// {
//     // La méthode .remove() va ajouter la classe.
//     rectangle.classList.add('important');
// }
//
//
//
// /************************************************************************************/
// /* ******************************** CODE PRINCIPAL **********************************/
// /************************************************************************************/
//
// // Installation d'un gestionnaire d'évènement clic sur le bouton.
// button.addEventListener('click', onClickButton);
//
// // Installation de deux gestionnaires d'évènements de survol du rectangle à la souris.
// rectangle.addEventListener('mouseout', onMouseOutRectangle);
// rectangle.addEventListener('mouseover', onMouseOverRectangle);
//
// // Installation d'un gestionnaire d'évènement double clic sur le rectangle.
// rectangle.addEventListener('dblclick', onDoubleClickRectangle);
