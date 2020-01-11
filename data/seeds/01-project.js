exports.seed = async (knex) => {
    await knex("project").insert([
        {name: "Build a house", description: "A noble task", completed: false},
        {name: "Mop the floor", description: "Watch your step", completed: false},
        {name: "Go for a jog", description: null, completed: false}
    ])
}