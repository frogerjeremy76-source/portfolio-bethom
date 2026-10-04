/* Menu burger (mobile uniquement) : seul script du site.
   Il ouvre/ferme la liste de liens et met à jour aria-expanded
   pour les lecteurs d'écran. Sans JS, le menu reste visible. */
document.documentElement.classList.remove('no-js');

const burger = document.querySelector('.burger');
const menu = document.getElementById('menu-principal');

function setMenu(open) {
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  menu.classList.toggle('is-open', open);
}

burger.addEventListener('click', () => {
  setMenu(burger.getAttribute('aria-expanded') !== 'true');
});

// Fermeture après un clic sur un lien d'ancre ou avec la touche Échap
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    burger.focus();
  }
});
