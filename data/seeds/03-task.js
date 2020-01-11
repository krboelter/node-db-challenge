exports.seed = async (knex) => {
    await knex("task").insert([
        {description: "Build the foundation", notes: "Add lots of concrete", completed: false, project_id: 1},
        {description: "Build the walls", notes: "Time to use up that wood", completed: false, project_id: 1},
        {description: "Drywall time", notes: "This might get messy", completed: false, project_id: 1},
        {description: "Fill the bucket with water", notes: "Fill about 1/2 full", completed: false, project_id: 2},
        {description: "Add soap and mix", notes: null, completed: false, project_id: 2},
        {description: "Mop floor until clean", notes: "This place better be spotless!", completed: false, project_id: 2},
        {description: "Put on shoes", notes: null, completed: false, project_id: 3},
        {description: "Turn on music", notes: "Meatalhead all the way", completed: false, project_id: 3},
        {description: "Stretch", notes: null, completed: false, project_id: 3},
        {description: "Sprint", notes: "The whole way", completed: false, project_id: 3}
        
    ])
}