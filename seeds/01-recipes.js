exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { recipeName: "Glazed Ham", servings: 1 },
    { recipeName: "Craw Crud", servings: 5 },
    { recipeName: "Stephenson Sausage", servings: 10 }
  ]);
};
