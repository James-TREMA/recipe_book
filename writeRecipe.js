const fs = require('fs');

const addRecipe = (title, ingredients, instructions) => {
  const recipeFormat = `Titre: ${title}\n\nIngrédients:\n${ingredients.split(',').join('\n')}\n\nInstructions:\n${instructions}\n\n`;
  fs.appendFile('recipes.txt', recipeFormat, 'utf8', err => {
    if (err) {
      console.error("Erreur lors de l'écriture du fichier", err);
    } else {
      console.log('Recette ajoutée !');
    }
  });
};

const [,, title, ingredients, instructions] = process.argv;

if (title && ingredients && instructions) {
  addRecipe(title, ingredients, instructions);
} else {
  console.log('Veuillez fournir un titre, des ingrédients et des instructions pour la recette');
}

// Utilisation :
// node writeRecipe.js "Frite" "ingrédient1,ingrédient2,ingrédient3" "Instructions de la recette"
