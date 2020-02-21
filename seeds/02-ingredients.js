exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "Chili", Quantity: 22, recipe_id: 1 },
    { name: "Beans", Quantity: 44, recipe_id: 2 },
    { name: "Tamago", Quantity: 66, recipe_id: 3 }
  ]);
};
