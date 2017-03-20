//Exercice 2
/*
Demander un nombre 1 à l'utilisateur
Demander un nombre 2 à l'utilisateur
Afficher le résultat de l'addition

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseInt */


var nombre1 = window.prompt('Nombre 1 ?')
var nombre2 = window.prompt('Nombre 2 ?');
var nombre3 = parseInt(nombre1)
var nombre4 = parseInt(nombre2)
var resultat = nombre3 + nombre4;
document.write("Le resultat est " + resultat);

//Correction :

var nb1;
var nb2;
var resultat;

nb1 = window.prompt('Entrez un 1er nombre');
nb2 = window.prompt('Entrez un 2eme nombre');

// On utilise parseInt() pour transformer la chaine de caractère en Integer, ce qui nous permet de faire une addition
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
resultat = nb1 + nb2;

document.write(" Le résultat est" + resultat);
