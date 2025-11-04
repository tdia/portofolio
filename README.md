# Portfolio – Tidiane DIA

Site portfolio moderne, responsive, orienté Data & Aide à la Décision.
Construit en HTML/CSS/JavaScript pur, sans framework, prêt pour déploiement sur GitHub Pages.

## Aperçu
- Sections: Home, About, Contact
- Page dédiée: `projects.html` avec deux blocs de projets (DATA et WEB)
- Modale de détails par projet (cliquez sur une carte)
- Thème: bleu nuit, blanc, gris – typographies Poppins/Montserrat
- Mobile-first, animations légères

## Structure
```
portofolio1/
├─ index.html          # Page d’accueil (affiche 6 projets récents)
├─ projects.html       # Tous les projets (2 blocs: DATA et WEB)
├─ styles.css          # Styles globaux et modale
├─ script.js           # Configuration et interactions
├─ images/             # Vos images (projets, profil)
└─ README.md
```

## Personnalisation rapide
Tout se fait dans `script.js` via `siteConfig`.
- CV: `siteConfig.cvUrl`
- LinkedIn: `siteConfig.linkedinUrl`
- Héros (Home): `siteConfig.hero` (`name`, `role`, `subtext`)
- Projets: `siteConfig.projects` (voir schéma ci-dessous)

Schéma d’un projet:
```js
{
  title: 'Titre du projet',
  description: 'Court résumé visible sur la carte',
  details: 'Texte plus long dans la modale',
  image: 'images/mon-image.png',
  link: '# ou https://…',
  type: 'DATA' | 'WEB'  // utilisé sur projects.html pour classer
}
```

- Home affiche automatiquement les 6 premiers projets (ordre de `siteConfig.projects`).
- `projects.html` affiche jusqu’à 6 projets DATA et 6 projets WEB. Modifiez la limite dans `renderProjectsByType()` si nécessaire.

## Lancer en local
1. Ouvrez `index.html` dans votre navigateur
2. Ou servez via un petit serveur local (recommandé pour les chemins relatifs):
```bash
# Python
python -m http.server 8080
# Puis ouvrez http://localhost:8080
```

## Déploiement – GitHub Pages
1. Créez un nouveau dépôt sur GitHub et poussez le contenu du dossier.
2. Sur GitHub: Settings → Pages → Build and deployment → Source: Deploy from a branch
3. Branche: `main` (ou `master`), dossier `/ (root)`.
4. Enregistrez. L’URL sera du type: `https://<votre-utilisateur>.github.io/<nom-du-depot>/`.

Astuce: Renommez le dépôt en `tdia.github.io` pour une URL racine `https://tdia.github.io/`.

## Déploiement – Vercel
Option recommandée pour votre compte `tdiadiabe01-2113`.

### Méthode 1 – Interface Vercel
1. Connectez-vous sur `https://vercel.com` et choisissez le compte `tdiadiabe01-2113`.
2. New Project → Importez le dépôt GitHub de ce portfolio.
3. Framework: “Other” (site statique). Build Command: vide. Output Directory: `./` (racine).
4. Deploy. L’URL sera proposée automatiquement (`*.vercel.app`).

### Méthode 2 – Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```
- Sélectionnez le scope `tdiadiabe01-2113`.
- Répondez “root” comme répertoire à déployer.

## Bonnes pratiques
- Compressez vos images (PNG/JPG) pour de meilleures performances
- Gardez 1200×675 environ pour les vignettes (ratio 16:9)
- Mettez à jour régulièrement vos projets et liens

## Licence
Ce projet est fourni « tel quel ». Vous êtes libre de l’adapter pour votre usage personnel.


