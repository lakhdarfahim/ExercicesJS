var textarea = document.querySelector('textarea');
var paragraphe = document.querySelector('p');

function compteur() {
    var result = 140-textarea.value.length;
    paragraphe.textContent = result;
    if (result<0) {
        paragraphe.classList.add('important');
    }
    else {
        paragraphe.classList.remove('important');
    }
}

textarea.addEventListener('keydown', compteur);
