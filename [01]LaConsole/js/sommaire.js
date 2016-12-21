//Creation des variables auquel on fait appel dans le cours
var tableauFruits = ["bananes","fraises","pêches"];
var nombre = 10;
var phrase = 'Hello World';
var chiens = ['Carlin','Labrador','Beagle'];
function affichage(){ console.log("Hello World")};

//Contenus du cours sous forme objet Javascript
var sommaire = {
  "debuter" : "Bienvenus dans la console.\nVous vous apprêtez à en apprendre un peu plus sur son utilisation.\nPour commencer à nous familiariser à elle, abordont tout de suite les variables.\n\nUne variable nous permet de stocker de l'information, sous les formes suivantes : Array(Tableau), Objet, string(texte), etc...\n\nVous pouvez à tout moment reprendre ce que vous avez tapé avec la fèche du haut de votre clavier.\nPour aller à la ligne dans la console 'Maj + Entrée'\nPour afficher un element : console.log('votre element')\n\nJuste en dessous, tapez : sommaire.variables",

  "variables" : "Parfait!\nVous venez d'afficher  une information stocké dans une variable sous la forme d'un objet. C'est la majeur partie de ce que vous ferez ici la pluparts du temps, mais vous apprendrez que ceci peut-être trés utile.\nOn déclare une variable en utilisant le prefix var\nLes variables peuvent contenir un grand nombre d\'informations differentes. Il existe 4 grand types de structures possibles\n\nDes nombres\n( entiers = int / à virgules = float )\nvar nombre = 10\n\nDes mots ( string )\nvar phrase = 'Hello World'\n\nUn tableaux\nvar chiens = ['Carlin','Labrador','Beagle']\n\nUn objets ( la forme plus complete )\nvar sommaire = {'debuter' : 'Bienvenus dans la console...','variables':'Parfait! Vous venez d'afficher...'}\nCes 4 variables sont déjà déclaré, vous pouvez donc les afficher avec le console.log( 'la variable de votre choix' )\n\nLa suite --> sommaire.operateurs",

  'operateurs' : 'Comme dans des operations mathematique, on peux manipuler nos variable avec les operateurs numeriques ( + - / * )\nOn veux ajouter "1" à notre variable\n.Tapez "nombre + 1". Le resultat affiché sera égal à 2. Affichez maintenant votre variable avec console.log( nombre ).\n\nVous remarquez que sa valeur reste inchangé.\nCe que nous voulons maintenant est lui ajouter "1" afin de la modifier pour de bon (une variable est par principe variable...)\nIl y a 3 manière de faire ceci.\n\nnombre = nombre + 1\nnombre += 1\nnombre++ ( incrementation de 1 uniquement)\n\nTapez une possibilité dans les 3 proposé et affichez entier.\nSa valeur à été modifié. Vous pouvez egalement remarquer que l\'on ne met pas le prefixe var car la variable est déjà definie. On peut ainsi lui ajouter ce que l\'on veux\nLa suite --> sommaire.string',

  'string' : "Une string est ce que l'on appelle une chaine de caracter, elle sera toujours encadré de guillemets pour bien la differencier d'une variable.\nDeclarez une variable var phrase1 = 'Hello' et var phrase2 = 'World'.\nNous allons additionner ces deux variables pour en faire une 3em.\nEcrivez var phrase3 = phrase1 + phrase2.\nAfficher phrase3.\nOn appel cela faire une 'concatenation'( Vous l'utiliserez souvent )\nSi vous affichez phrase3 les deux mots sont collés. On veux que phrase3 soit écrit correctement. Pour cela il faudrait qu'il y ai un espace entre les deux mots.\nTapez phrase3 = phrase1 + ' ' + phrase2 (  Ajout d'une string espace entre guillemet )\nOn peut donc ajouter des variables avec de simples string ou des entiers à l\'aide de l'operateur +.\nla suite --> sommaire.tableaux",

  'tableaux' : 'On appel les tableaux Array. Ils permettent de stocker un grand nombre d\'informations sous cette forme\nvar tableauFruits = ["bananes","fraises","pêches"].\nOn peut les manipulers de différentes manières. Si l\'on souhaite ajouter un element au tableaux on va utiliser la methode objet push() : tableauxFruits.push( "kiwi" )\nAffichez tableauFruits puis tapez la commande précédante et affichez le resultat.\nUn tableau utilise des index pour trouver chaque information. On fera appel à une valeur d\'un tableau avec l\'element [] et son index.\nLe tableauxFruit possede maintenant 4 elements. Affichez des elements pour vous entrainer en tapant tableauFruits[1] (0, 1 ,2 ou 3)\n\nIl est impotant de noter qu\'un tableau possede un index pour faire appel a ses valeurs qui commence a 0. Donc pour faire appel a un element du talbeau on utilisera tableauFruits[0] pour afficher le premier element.\nIl possède une propriété objet appelé length qui est egal au nombre d\'element qu\'il contient. La propriété length denombre la totalité des elements et commence à partir de 1. Un tableau dénombrant 3 elements aura un index comme ceci 0, 1, 2 et une length de 3 --> 1, 2, 3\n\nBonus : A tout moment vous pouvez afficher une variable dans un tableau pour regarder sa structure objet en faisant console.log([ votre variable ]), cela est extremement utile lorsque l\'on cherche à atteindre une information précise.\nEssayez d\'afficher une variable déjà déclaré comme nombre, phrase ou chiens dans un tableau et voir ce qu\'il se passe.\n\nla suite --> sommaire.function',

  'function' : 'Premiers bloque de programmation, les fonctions servent à activer des comportements. Elles se definissent de la sorte :\n\nfunction affichage(){\n    console.log("Hello World")\n};\n\nUne fonction possède une propriété particuliere appelé le scope, ou portée ( en français ). Cela signifie qu\'un element ou une varialbe déclaré à l\'interieur de la fonction n\'existera qu\'au moment ou la fonction sera definis et ne sera plus accessible aprés à moins d\'avoir fait ce qu\'il faut pour y remédier avec return "nom de la variable" ou redefinir une variable globale a l\'interieur de la fonction même. Pour une variable on appelera cela une variable locale. Une variable definis en dehors d\'une fonction sera de portée globale puisque ateniable à tout moment.\nIl existe differents moyen de sortir des informations d\'une fonction\nPour lancer la fonction on va ecrire son nom suivis de parentaisent --> tapez affichage()\nLa string Hello World s\'est affiché correctement. Pour le moment c\'est assez simple. Voyont maintenant la notion d\'argument\n\nla suite -->sommaire.argument',

  'argument' : 'les arguments peuvent aussi être appelé des place holder ( prend la place de... ). Il vont nous permettre de definir une fonction avec une variable ui sera definis plus tard. Dans le cadre de notre fonction affichage vous allez maintenant la redefinir avec un arguement en place holder.\nEcrivez ceci : function affichage( info ){console.log(info)};\n Vous pouvez maintenant taper ce que vous souhaitez a la place de info. Une string, un entier ou une variable existante. Essayez affichage( chiens ).\nchiens ayant été definis précédemment sa valeur prend la place du place holder.\n Tapez maintenant affichage("n\'importe quoi")\nAvec la fonction affichage vous pouvez maintenant afficher ce que vous souhaiter.\n\nsommaire.boucles[0]',

  'boucles' : ['Une boucle sert à executer des propriétés fonctions celon des parametres definis. Il en existe 3 sortes. la boucle "while", la boucle "do while" et la boucle "for". Chacune pocede des utilité qui lui sont propres\nLa suite sommaire.boucles[1]','La boucle while :\n\nLa boucle while s\'ecris de la sorte:\nwhile("condition"){"execution"}\nconditon sera égale à quelque chose de ce style : var nombre < 10 et incluera une incrémentation de nombre à l\'interieur du while dans "execution"\n\nAttention si vous oubliez l\'incrementation de i dans ce cas precis vous produirez une boucle infinies car i sera toujours égale à 0. Cela peut être fatale dans le cas d\'information conplexe retourné par la boucle.\n\nTapez ceci :\n var i = 0\nwhile( i<10 ){\n    console.log(i)\n    i++\n};\n et appuyez sur entrée.\n\nVous pouvez utiliser cette forme de boucle dans le cas ou vous souhaitez executer une propriété jusqu\'a un certain point.\n\nLa suite --> sommaire.boucles[2]','La boucle do while :\nElle s\'ecrira sous cette forme\ndo{\n    instruction 1\n    instruction 2\n    instruction 3...\n}while( condition )\n\nPour avoir le même resultat que la boucle précédente, executez dans la console ceci var j = 0 do{\n    console.log(j)\n    j++\n}while(j<10)\n\nVous pouvez remarquer que cette fois le nombre 10 est affiché car la conditon n\'est analysé qu\'aprés l\'execution des instructions\n\nLa suite --> sommaire.boucles[3]','La boucle for :\nLa plus couramment utilisé, cette boucle permet de faire ce qui pourrait s\'apparenter à un mapping. Le plus souvent elle sert à explorer les elements contenus dans un tableau.\nElle s\'ecrira sous cette forme :\nfor( initialisation; condition; incrémentation ){ instructions; }\nVous avez suremment remarqué que cette parties sur les boucle s\'affichent comme ceci depuis tout à l\'heure --> sommaire.boucles[0]. Le schema de donnée est constitué de la sorte, sommaire est en fait un objet a plusieurs entrés et boucles contient en fait un tableau.\nà l\'aide d\'une boucle for on va afficher tous les elements de boucles. Procedez de la sorte :\nfor(var i = 0;i<sommaire.boucles.length;i++){\n    console.log( sommaire.boucles[i] )\n}\n\net appuyer sur entrée.','Bravo!!\n\nExpliquons maintenant ce qu\'il viens de se passer.\nvar i est votre variable d\'incrementation.\nRappelez vous que dans le cas d\'un tableau le premier index est égal a 0 et la propriété length commence à 1 et est toujours égale a +1 par rapport a l\'index.\nPour explorer notre tableau en entier, on voudra donc que la valeur de i soit toujours strictement inferieur à sommaire.boucles.length.\n\nSi vous le souhaitez vous pouvez essayer de reproduire l\'exercice avec le tableau chiens en procedant de la même façon.\n\ncas pratique --> sommaire.exo01'],

  'exo01' : 'En utilisant les elements vus precedemment, affichez dans la console une pyramide constitué de "#" et possedant 7 étages. Elle devra ressembler à ceci :\n#\n# #\n# # #\n# # # #\n# # # # #\n# # # # # #\n# # # # # # #\n\nN\'oubliez pas qu\'à tous moment vous pouvez acceder à n\'importe quel chapitre abordé precedemment en affichant le sommaire avec console.log(sommaire) et en appelant la propriétée objet avec le "." et la propriété desirée',

  'correctionExo01' : 'var ash = "#"\n\nfor( var i = 0; i < 7; i++ ){\n    console.log( ash )\n    ash += " #"\n};\n\nla suite --> sommaire.DOM',

  'DOM' : 'Le DOM est un diminutif de document, c\'est ainsi que l\'on nomme la page HTML. Le Javascript est un language qui permet d\'intervenir directement dans le DOM pour changer des elements en temps reel. Il est trés puissant lorsqu\'il s\'agit de mettre en place une interactivité avec l\'utilisateur.\nNous allons passer à l\'exercice suivant mais avant cela nous devons construire le liens qui va nous permettre de changer de page.\nTout va reposer sur votre capacité à identifier un element dans le Dom puis à le changer.\nUne technique consiste à utiliser la méthode objet document.getElementBy...\n\nVous pouvez stocker un element de la feuille HTML dans une variable qui représentera ensuite cet element.\nCommencez par declarer une variable que l\'on va appeler "var lien" en vue de sa futur modification en liens puis stockez a l\'interieur de cette dernière l\'element h1 capturé du DOM.\nUne fois l\'element identifié, affichez le dans un tableau avec console.log([lien]) puis trouvez la valeur innerHTML. Vous allez devoir changer cette valeur pour qu\'elle contienne une balise <a> pointant sur une valeur contenue dans sommaire.lien\n\nA chaque fois que vous avancez dans votre code pensez à afficher votre variable avec console.log pour être sûr de ce qui est encapsulé a l\'interieur.\n\nAttention, il y a une subtilité dans la propriété getElementsBy...\nVous pouvez aller chercher une balise HTML (tagName), une class (ClassName), une ID ou d\'autres elements. Par nature, une ID est unique, donc la propriété getElementByID sera au singulier et renvera un objet unique. Si vous allez cherche une classe ou un tagName, il est possible qu\'il en trouve plusieurs sur la page, getElementsByTagName s\'ecris donc au pluriel et renvera dans tous les cas un tableau même si il n\'en trouve qu\'un seul element.\nAffichez votre variable avec console.log afin d\'explorer l\'objet dans la console. Chaque element affiché est une propriété objet et peut-être changé en declarant votre variable, son index si il est dans un tableau, puis la propriété objet que vous voulez modifier ou afficher. Cherchez un element intitulé innerHTML et remplacez sa valeur avec une balise "a" contenant en href une valeur stocké dans l\'objet sommaire.lien',

  'correctionDOM' : 'var lien = document.getElementsByTagName("h1")\nlien[0].innerHTML = "<a href=\'" + sommaire.lien + "\'>Liens Vers l\'exercice</a>"',

  'lien' : '../[02]ExoRetrouvailles/index.html'
}