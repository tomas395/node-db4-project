exports.seed = function(knex, Promise) {
  return knex("instructions").insert([
    { instruction: "Call Doordash.", recipe_id: 1 },
    { instruction: "Call Mom.", recipe_id: 2 },
    { instruction: "Go to jail and get it for free.", recipe_id: 3 }
  ]);
};
