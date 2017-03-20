//Exercice 3


// ## Enoncé
//
//
// L'utilisateur saisit un montant HT, le résultat TTC s'affiche en HTML.
//
// ## Détails
//
// * Le taux de TVA utilisé est le taux normal en vigueur en France.
// * Le taux de TVA n'est pas variable il faut donc utiliser une constante.
// * Il faut réafficher toutes les informations : le montant HT, le montant de TVA et le résultat TTC.
// * Attention au type de donnée renvoyé par window.prompt()…
// * Le montant HT peut être à virgule…

const tauxTVA = 0.2;
var montantHT
var montantTVA
var resultatTTC

montantHT = window.prompt('Entrez le montant hors taxe')
montantHT = parseFloat(montantHT)

montantTVA = tauxTVA * montantHT;

resultatTTC = montantTVA + montantHT;

document.write("Pour un montant HT de " + montantHT + " il y'a " + montantTVA + " € de TVA. <br /> Le montant TTC est donc de " + resultatTTC + " €.");

//Correction :

//Je déclare toutes les variables dont on a besoin :

const TAUX_TVA = 20;
var montant_ht;
var montant_tva;
var montant_ttc;

// 1 Je demande à l'utilisateur de saisir le montant Ht

montant_ht = window.prompt('Entrez un montant HT');

// 2 Je calcule le montantTVA et le montantTTC

montant_ht = parseFloat(montant_ht);
montant_tva = TAUX_TVA/100 * montant_ht;
montant_ttc = montant_ht + montant_tva;

// 3 J'affiche
document.write('<p>Pour un montant HT de ' + montant_ht + ' € il y a ' + montant_tva + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montant_ttc + ' €.</p>');
