
exports.up = async function(knex) {
    await knex.schema.createTable("project" , (table) => {
        table.increments()
        table.string("name")
            .notNullable()
        table.string("description")
        table.boolean("completed")
            .notNullable()
    })
    await knex.schema.createTable("resource", (table) => {
        table.increments()
        table.string("name")
            .notNullable()
        table.string("description")
    })
    await knex.schema.createTable("task", (table) => {
        table.increments()
        table.string("description")
            .notNullable()
        table.string("notes")
        table.boolean("completed")
            .notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("project")
};
