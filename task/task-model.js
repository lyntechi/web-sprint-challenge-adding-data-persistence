const db = require("../data/db-config");

module.exports = {
  getAll,
  findById,
  add
};

function getAll() {
  return db("project as p")
    .join("task as t", "p.id", "=", "t.project_id")
    .select(
      "t.description",
      "t.notes",
      "p.name as project_name",
      "p.description as project_description"
    )
    .orderBy("p.id");
}
function findById(id) {
  return db("project").where({ id }).first();
}

function add(task) {
    return db("task").insert(task,'id') ;
  }
