//Exercice 1
/*Afficher dans la page : "Je m'apelle [prenom] et j'ai [age] ans".

1/ Declarer les variables prenom et age
2/ affecter les valeurs à ses variable
3/ Afficher la phrase dans la page en JS(utiliser la concaténation +)*/



var prenom = window.prompt('Votre prenom ?');
var age = window.prompt('Votre age ?');
document.write("Je m'apelle " + prenom + " et j'ai " + age + " ans.");

var prenom = 'LAKHDAR';
// var age = window.prompt('votre age ?');
var age = 22;

document.write('<h1>');
document.write('Je m\'appelle ' + prenom);
document.write('</h1>');


document.write("<p>et j'ai " + age + " ans.</p>");

var age = 39 + 5;

document.write('<h1>');
document.write('Je m\'appelle ' + prenom);
document.write('</h1>');

document.write("<p>et j'ai " + age + " ans.</p>");
