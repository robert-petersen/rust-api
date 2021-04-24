
exports.up = function(knex) {
  return knex.schema
    .createTable("roles", tbl => {
      tbl.increments("roleId");
      tbl.string("role").notNullable();
    })
    .createTable("")
  
};

exports.down = function(knex) {
  
};
