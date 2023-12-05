const fs = require('fs');
const titleToSearch = process.argv[2];

fs.readFile('recipes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }

  const recipes = data.split('\n\n').filter(r => r.includes(`Titre: ${titleToSearch}`));

  if (recipes.length > 0) {
    console.log('Recette trouvée :\n', recipes.join('\n\n'));
  } else {
    console.log('Aucune recette trouvée avec ce titre.');
  }
});

// Utilisation : 
// node searchRecipe.js "Titre de la Recette"
