# Vitrine — Portfolio cybersécurité

Portfolio d'un ingénieur en cybersécurité, construit avec **React 19**, **Vite** et **Motion** (animations).
Le design est volontairement sobre et professionnel : fond clair et chaleureux, typographie éditoriale, et un thème sombre doux en option. Pas d'esthétique « cyberpunk ».

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Personnaliser

Tout le contenu se trouve dans **`src/data/profile.js`** : nom, accroche, statistiques, domaines de compétences (niveaux et outils), certifications, parcours, projets et méthode.
Les couleurs sont définies comme variables CSS en haut de `src/index.css` (`:root` pour le thème clair, `[data-theme='dark']` pour le sombre).

## Sections

- **Accueil** : titre révélé mot par mot, bouclier dessiné en SVG, badges de domaines qui flottent doucement
- **À propos** : compteurs animés
- **Compétences** : 6 domaines avec onglets animés, barres de niveau et outils
- **Méthode** : démarche en 4 étapes
- **Parcours** : frise chronologique qui se remplit au défilement
- **Certifications**, **Projets** (filtrables), **Contact** (copie de l'e-mail + formulaire `mailto:`)

Les animations respectent le réglage système `prefers-reduced-motion`.
