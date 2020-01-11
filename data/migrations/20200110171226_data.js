
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
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
    await knex.schema.createTable("project_resource", (table) => {
        table.primary(["project_id", "resource_id"])
        table.integer("project_id")
            .notNullable()
            .references("id")
            .inTable("project")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("resource_id")
            .notNullable()
            .references("id")
            .inTable("resource")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resource")
    await knex.schema.dropTableIfExists("task")
    await knex.schema.dropTableIfExists("resource")
    await knex.schema.dropTableIfExists("project")
};
