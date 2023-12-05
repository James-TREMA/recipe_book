# recipe_book

# Carnet de Recettes

Ce devoir implémente un système de gestion de carnet de recettes en ligne de commande utilisant Node.js. Il permet aux utilisateurs d'ajouter, de lire, de rechercher et de supprimer des recettes stockées dans un fichier texte.

## Fonctionnalités

- **Ajouter des recettes** : Les utilisateurs peuvent ajouter des recettes avec un titre, une liste d'ingrédients et des instructions.
- **Lire des recettes** : Les recettes peuvent être lues à partir du fichier `recipes.txt`, affichant toutes les recettes stockées.
- **Rechercher une recette** : Les utilisateurs peuvent rechercher une recette spécifique par son titre.
- **Supprimer une recette** : Les utilisateurs peuvent supprimer une recette spécifique par son titre.

## Comment ça marche

Pour ce devoir on utilise le système de fichiers Node.js (`fs`) pour lire et écrire dans un fichier texte. Le contenu est ajouté au fichier `recipes.txt`, où chaque recette est séparée par un double saut de ligne pour une lisibilité et une manipulation faciles.

## Scripts

- `writeRecipe.js` : Ajoute une nouvelle recette au fichier `recipes.txt`.
- `readRecipe.js` : Lit et affiche le contenu de `recipes.txt`.
- `searchRecipe.js` : Recherche une recette spécifique par son titre dans `recipes.txt`.
- `deleteRecipe.js` : Supprime une recette spécifique par son titre de `recipes.txt`.

## Utilisation

Pour exécuter l'un des scripts, utilisez la commande `node` suivie du nom du script et des arguments nécessaires. Par exemple, pour ajouter une recette :

## Commandes :
# Ajouter une recette :
```bash
node writeRecipe.js "Frite" "ingrédient1,ingrédient2,ingrédient3" "Instructions de la recette"
```
# Recherché une recette :
```bash
node searchRecipe.js "Frite"
```
# Supprimé une recette :
```bash
node deleteRecipe.js "Frite"
```
