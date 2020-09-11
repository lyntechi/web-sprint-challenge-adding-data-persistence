exports.up = function (knex) {
  return knex.schema

    .createTable("resource", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").nullable();
    })
    .createTable("task", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").notNullable();
      table.boolean("completed").default(false);
    })
    .createTable("project", (table) => {
      table.increments();
      table.string("name", 255).notNullable().index();
      table.string("description").nullable();
      table.boolean("completed").default(false);
      table
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("task")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("project_resource", (table) => {

      table.increments()
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
