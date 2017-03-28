// ## Enoncé
//
// Construire une table des multiplications dans une variable puis afficher en HTML le contenu de cette variable.
//
// ## Remarques
//
// * Pour rappel, une boucle permet d'initialiser un tableau...
// * Utiliser un tableau HTML pour construire l'affichage
// * Au moment de l'affichage HTML, lorsque le nombre est multiplié par lui-même (1x1, 2x2, 3x3, etc.) la cellule du tableau doit s'afficher d'une autre couleur que les autres cellules; **la solution doit être en CSS**.
//
// <script>
//
// 'use strict';   // Mode strict du JavaScript
//
//  Déclaration de quatre variables.
var colonne;
var ligne;
var taille;
var tableMultiplications;


// Demande la taille maximum de la table des multiplications.
taille = parseInt(window.prompt('Taille de la table de multiplications ?'));

// Initialisation de la table des multiplications.
tableMultiplications = [];


// 1 Construction de la table dans une variable table Multiplications
for(ligne = 1; ligne <= taille; ligne++)
{
    // Pour chaque nouvelle ligne il faut créer un nouveau tableau.
    tableMultiplications[ligne] = new Array();

    for(colonne = 1; colonne <= taille; colonne++)
    {
        // Stockage du résultat du calcul dans la table des multiplications.
        tableMultiplications[ligne][colonne] = ligne * colonne;
    }
}


// 2 Construction en HTML de la table des multiplications.
document.write('<table>');

for(ligne = 1; ligne <= taille; ligne++)
{
    document.write('<tr>');

    for(colonne = 1; colonne <= taille; colonne++)
    {
        // Si les deux nombres multipliés sont les mêmes...
        if(ligne == colonne)
        {
            // ...Alors on applique une classe CSS à la cellule.
            document.write('<td class="same-number">');
        }
        else
        {
            document.write('<td>');
        }

        document.write(tableMultiplications[ligne][colonne]);

        document.write('</td>');
    }

    document.write('</tr>');
}

document.write('</table>');


// /* Correction 2
// document.write('<table>');
//
// for(ligne = 1; ligne <= taille; ligne++)
// {
//     document.write('<tr>');
//
//     for(colonne = 1; colonne <= taille; colonne++)
//     {
//         // Si les deux nombres multipliés sont les mêmes...
//         if(ligne == colonne)
//         {
//             // ...Alors on applique une classe CSS à la cellule.
//             document.write('<td class="same-number">');
//         }
//         else
//         {
//             document.write('<td>');
//         }
//
//         document.write(ligne*colonne);
//
//         document.write('</td>');
//     }
//
//     document.write('</tr>');
// }
//
// document.write('</table>');
