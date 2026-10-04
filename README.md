# BeThom – Portfolio de Thomas, graphiste freelance

Intégration HTML/CSS de la maquette Figma (desktop 1440 px et mobile 375 px) du portfolio de Thomas, réalisée dans le cadre d'un challenge de formation en développement web.

Le site est une page unique avec un menu fixe et des ancres vers 4 sections : **Accueil**, **Blog** (articles récents), **Portfolio** (travaux en vedette) et **Contact** (formulaire).

## Technologies

- **HTML5** sémantique (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** sans framework : variables CSS, **Flexbox** (en-tête, hero, méta-données) et **CSS Grid** (cartes d'articles, portfolio, contact)
- **JavaScript** : un seul petit script (`js/menu.js`) pour ouvrir/fermer le menu burger en mobile. Sans JavaScript, le menu reste affiché et le site fonctionne.

## Police

**Heebo** (400, 500, 700), chargée depuis Google Fonts. Poppins est déclarée en police de secours.

## Structure du projet

```
portfolio-bethom/
├── index.html              Page unique du site
├── favicon.ico             Favicon (navigateurs anciens)
├── README.md
├── css/
│   └── style.css           Styles : desktop d'abord, puis tablette et mobile
├── js/
│   └── menu.js             Menu burger (mobile)
├── images/
│   ├── favicon.svg         Favicon vectoriel
│   ├── apple-touch-icon.png
│   ├── thomas-photo.webp
│   ├── projet-dashboard.webp
│   ├── projet-portraits.webp
│   ├── projet-typographie.webp
│   └── icons/              Icônes des réseaux sociaux (SVG)
└── documents/
    └── CV.pdf              CV téléchargé par le bouton « Télécharger mon CV »
```

## Ouvrir le site en local

1. Télécharger ou cloner le dépôt.
2. Double-cliquer sur `index.html` pour l'ouvrir dans un navigateur.

Pour un rendu identique à la mise en ligne, on peut aussi utiliser un petit serveur local, par exemple l'extension **Live Server** de VS Code, ou en ligne de commande depuis le dossier :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Responsive

| Largeur | Comportement |
|---|---|
| ≥ 1200 px | Maquette desktop (conteneur de 1184 px) |
| 768 – 1199 px | Tablette : mise en page desktop avec des largeurs fluides. Sous 992 px, le bloc contact passe sur une colonne. |
| ≤ 767 px | Maquette mobile : menu burger, photo au-dessus du texte, cartes et projets en une colonne, formulaire seul. |

## Accessibilité et qualité

- Un seul `h1`, puis des `h2` pour les sections et des `h3` pour les éléments.
- `lang="fr"`, textes alternatifs descriptifs, labels associés à chaque champ (`for` / `id`).
- Lien « Aller au contenu » visible au clavier, focus visible, `aria-expanded` sur le bouton burger.
- Décalage des ancres sous le menu fixe avec `scroll-padding-top`. Défilement doux désactivé si l'utilisateur a choisi de réduire les animations.
- Validation : HTML et CSS valides au validateur W3C (Nu Html Checker), et aucune erreur relevée par axe-core (WCAG 2 AA).

## Écarts volontaires avec la maquette

- **Contraste** : quatre couleurs de la maquette ne passaient pas le ratio WCAG AA (4.5:1). Elles ont été légèrement foncées : bouton CV `#FF6464` → `#D63B3B`, catégories `#8695A4` → `#6A7886`, lien « View all » `#00A8CC` → `#007A94`, placeholders. Les valeurs d'origine sont notées en commentaire dans `css/style.css` (variables au début du fichier) pour pouvoir revenir à la maquette exacte.
- **Fautes de frappe corrigées** : « Téléchager » → « Télécharger », « Articles resents » → « Articles récents ».
- **Police unique** : le titre « Socials » (serif) et le bouton « Envoyer » (Poppins) de la maquette utilisent Heebo, comme demandé dans le cahier des charges.
- **Contenus mobiles** : la maquette mobile reprend parfois des textes différents (« Recent posts », catégorie dupliquée). Le contenu desktop est utilisé partout pour garder une seule source.

## Images et documents

Aucun fichier source n'a été fourni avec l'exercice. La photo et les trois visuels de projets ont donc été extraits de la maquette, recadrés et convertis en **WebP** (4 à 12 Ko chacun). Le fichier `documents/CV.pdf` est un CV fictif. Pour les remplacer, il suffit de garder les mêmes noms de fichiers.

Le formulaire ouvre le logiciel de messagerie (`mailto:`), car le site est statique. Pour un vrai envoi, on peut brancher un service comme Formspree.

## Crédits

Icônes des réseaux sociaux : [Font Awesome Free](https://fontawesome.com) (licence CC BY 4.0).
