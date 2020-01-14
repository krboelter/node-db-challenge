exports.seed = async (knex) => {
    await knex("resource").insert([
        {name: "Lumber", description: "Watch for splinters!"},
        {name: "Nails", description: "16d nails only!"},
        {name: "Drywall", description: null},
        {name: "Bucket", description: "Holds water"},
        {name: "Water", description: "Held by bucket"},
        {name: "Soap", description: null},
        {name: "Shoes", description: "Tie them tight"},
        {name: "Music", description: "A neccessity"}
    ])
}