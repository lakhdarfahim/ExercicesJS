var ligne
var cellule
var taille

document.write('<table>');
document.write('<tbody>');

ligne = window.prompt('Choissisez une table de multiplication')
// generer ligne
for(var ligne=1; ligne<=10; ligne++) {
    document.write('<tr>');

    //generer cellule
    for(var cellule=1; cellule<=10; cellule++) {
        if(ligne == cellule){
            document.write('<td class="violet">')
        }
        else {
            document.write('<td>')
        }
        document.write(ligne * cellule)
        document.write('</td>')
    } // fin genener cellule

    document.write('</tr>');
} // fin generer ligne

document.write('</tbody>');
document.write('</table>');
