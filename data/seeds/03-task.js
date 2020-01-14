exports.seed = async (knex) => {
    await knex("task").insert([
        {task_description: "Build the foundation", notes: "Add lots of concrete", completed: false, project_id: 1},
        {task_description: "Build the walls", notes: "Time to use up that wood", completed: false, project_id: 1},
        {task_description: "Drywall time", notes: "This might get messy", completed: false, project_id: 1},
        {task_description: "Fill the bucket with water", notes: "Fill about 1/2 full", completed: false, project_id: 2},
        {task_description: "Add soap and mix", notes: null, completed: false, project_id: 2},
        {task_description: "Mop floor until clean", notes: "This place better be spotless!", completed: false, project_id: 2},
        {task_description: "Put on shoes", notes: null, completed: false, project_id: 3},
        {task_description: "Turn on music", notes: "Meatalhead all the way", completed: false, project_id: 3},
        {task_description: "Stretch", notes: null, completed: false, project_id: 3},
        {task_description: "Sprint", notes: "The whole way", completed: false, project_id: 3}
        
    ])
}