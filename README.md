# Portfolio

## Installation de gh-pages

```sh
npm install --save-dev gh-pages
```

### Ajout du fichier .nojekyll

```sh
touch dist/.nojekyll
```

### Dans ton package.json, ajoute ce script

```sh
"scripts": {
  "build": "vue-cli-service build",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Comande pour deployer
```sh
npm run deploy
```

