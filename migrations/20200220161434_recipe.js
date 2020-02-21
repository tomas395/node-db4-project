exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipeName")
        .notNullable()
        .unique();
      tbl.string("servings");
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.integer("Quantity", parseFloat(2)).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("instruction").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients");
};
