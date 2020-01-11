exports.seed = async (knex) => {
    await knex("project").insert([
        {project_name: "Build a house", project_description: "A noble task", completed: false},
        {project_name: "Mop the floor", project_description: "Watch your step", completed: false},
        {project_name: "Go for a jog", project_description: null, completed: false}
    ])
}