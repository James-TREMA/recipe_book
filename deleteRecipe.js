const fs = require('fs');
const titleToDelete = process.argv[2];

fs.readFile('recipes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }

    // Supprime les espaces blancs superflus avant et après le contenu.
    data = data.trim();

  // La regex suivante supprime la recette et tous les sauts de ligne qui l'entourent.
  const recipeRegex = new RegExp(`\\n*Titre: ${titleToDelete}\n(?:.|\n)*?(?=\\nTitre: |$)`, 'g');

  // On remplace la recette identifiée par une chaîne vide, y compris les sauts de ligne environnants.
  const updatedData = data.replace(recipeRegex, '');

  // On écrit les données mises à jour dans le fichier.
  fs.writeFile('recipes.txt', updatedData.trim() + '\n', 'utf8', err => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier", err);
    } else {
      console.log('Recette supprimée avec succès.');
    }
  });
});

// Utilisation :
// node deleteRecipe.js "Titre de la Recette"