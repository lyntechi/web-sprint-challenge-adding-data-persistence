exports.up = function (knex) {
  return knex.schema
    .createTable("project", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").nullable();
      table.boolean();
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("task")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resource", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").nullable();
    })
    .createTable("task", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
