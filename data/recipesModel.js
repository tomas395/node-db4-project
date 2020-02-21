const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("ingredients")
    .select("name", "Quantity")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db("instructions")
    .select("instruction")
    .where({ recipe_id: id }); //Only show steps with relevant scheme ID parameter
}
