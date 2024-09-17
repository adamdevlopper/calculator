// Sélectionne tous les boutons et crée un tableau de leurs codes de touche
const touches = [...document.querySelectorAll(".boutton")];
const listKeyCode = touches.map((t) => t.dataset.key);

// Sélectionne l'élément de l'écran où les calculs et résultats seront affichés
const ecran = document.querySelector('.ecran');

// Écouteur d'événements pour activer le mode sombre
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', () => {
    // Bascule la classe 'dark-mode' sur le body pour activer/désactiver le mode sombre
    document.body.classList.toggle('dark-mode');
});

// Gestion des entrées clavier pour les calculs
document.addEventListener("keydown", (e) => {
  // Obtient la valeur de la touche pressée
  const val = e.keyCode.toString();
  // Appelle la fonction de calcul avec la valeur de la touche
  calculer(val);
});

// Gestion des clics sur les boutons de la calculatrice
document.addEventListener("click", (e) => {
  // Obtient la valeur de la touche à partir du bouton cliqué
  const val = e.target.dataset.key;
  // Appelle la fonction de calcul avec la valeur du bouton
  calculer(val);
});

// Fonction de calcul qui traite les entrées de touches et de clics
const calculer = (val) => {
  // Vérifie si la valeur est une touche valide
  if (listKeyCode.includes(val)) {
    switch (val) {
        case '8': // Code pour la touche 'Backspace'
            // Efface l'écran
            ecran.textContent = ""
            break;
        case '13': // Code pour la touche 'Enter'
            try {
                // Évalue l'expression affichée sur l'écran
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
            } catch (e) {
                // Affiche une alerte en cas d'erreur de calcul
                alert('Erreur de calcul : ' + e.message);
            }
            break;
        default:
            // Ajoute le caractère du bouton cliqué à l'écran
            const indexKeyCode = listKeyCode.indexOf(val);
            const touche = touches[indexKeyCode];
            ecran.textContent += touche.innerHTML;
    }
  }
}

// Gestion des erreurs globales
window.addEventListener('error', e => {
    // Affiche une alerte en cas d'erreur dans le calcul
    alert('Attention, une erreur est survenue dans votre calcul : ' + e.message);
});
