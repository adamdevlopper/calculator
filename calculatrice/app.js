// DOM
const touches = [...document.querySelectorAll(".boutton")];
const listKeyCode = touches.map((t) => t.dataset.key);
const ecran = document.querySelector('.ecran');

// Écouteur d'événements pour le mode sombre
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Gestion des touches du clavier
document.addEventListener("keydown", (e) => {
  const val = e.keyCode.toString();
  calculer(val);
});

// Gestion des clics sur les boutons
document.addEventListener("click", (e) => {
  const val = e.target.dataset.key;
  calculer(val);
});

const calculer = (val) => {
  if (listKeyCode.includes(val)) {
    switch (val) {
        case '8':
            ecran.textContent = ""
            break
        case '13':
            try {
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
            } catch (e) {
                alert('Erreur de calcul : ' + e.message);
            }
            break
        default:
            const indexKeyCode = listKeyCode.indexOf(val);
            const touche = touches[indexKeyCode];
            ecran.textContent += touche.innerHTML;
    }
  }
}

// Gestion des erreurs de calcul
window.addEventListener('error', e => {
    alert('Attention, une erreur est survenue dans votre calcul : ' + e.message);
});