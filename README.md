<p align="center">
  <img src="src/assets/navlogo.png" alt="FactoryPulse logo" width="160" />
</p>

<h1 align="center">FactoryPulse</h1>

<p align="center">Tableau de bord pour suivre les machines d'une usine : statut, zone et production journalière.</p>

## Fonctionnalités

- Tableau de bord avec la vue d'ensemble des machines
- Liste des machines avec recherche par nom et filtre par statut
- Ajout d'une nouvelle machine via le formulaire `/machines/new` (en cours)

## Technologies

- React
- React Router
- Tailwind CSS
- Vite

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

Puis ouvrez l'adresse affichée dans le terminal (par défaut `http://localhost:5173`).

## Build de production

```bash
npm run build
```

## Structure

```
src/
├── App.jsx              # Routes et état de la liste des machines
├── pages/
│   ├── dashboard.jsx    # Tableau de bord
│   ├── machines.jsx     # Liste, recherche et filtre
│   └── addMachine.jsx   # Formulaire d'ajout
├── components/          # Card, Search, Filter, Nav
└── assets/              # Images, dont le logo
public/
└── machine.json         # Données initiales des machines
```

## Données

Les machines initiales sont chargées depuis `public/machine.json`. Les machines ajoutées depuis le formulaire restent en mémoire et disparaissent au rechargement de la page.
