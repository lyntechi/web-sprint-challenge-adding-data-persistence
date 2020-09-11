const db = require("../data/db-config");

module.exports = {
  getAll,
  add,
  findById,
};

function getAll() {
  return db("project");
}
function findById(id) {
  return db("project").where({ id }).first();
}

function add(projects) {
  return db("project").insert(projects, "id");
}
