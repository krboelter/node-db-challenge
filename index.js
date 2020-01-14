const express = require("express")
const db = require("./data/db-config")
const server = express()

server.use(express.json())

// get all resources
server.get("/api/resource", async (req, res, next) => {
    try {
        const resource = await db("resource")
        res.status(200).json(resource)
    } catch(err) {
        next(err)
    }
})

// post a new resource
server.post("/api/resource", async (req, res, next) => {
    try {
        const newResource = {
            name: req.body.name,
            description: req.body.description
        }

        await db("resource").insert(newResource)
        res.status(201).json({ message: "You have created a new resource"})
    } catch(err) {
        next(err)
    }
})

// get all projects
server.get("/api/project", async (req, res, next) => {
    try {
        const project = await db("project")
        const boolProject = project.map(proj => {
            return {
                ...proj,
                completed: proj.completed ? true : false
            }
        })

        res.status(200).json(boolProject)
    } catch(err) {
        next(err)
    }
})

// add a new project
server.post("/api/project", async (req, res, next) => {
    try {
        const newProject = {
            project_name: req.body.project_name,
            project_description: req.body.project_description,
            completed: req.body.completed || false
        }

        await db("project").insert(newProject)
        res.status(201).json({ message: "You have created a new project"})
    } catch(err) {
        next(err)
    }
})

// get all tasks
server.get("/api/task", async (req, res, next) => {
    try {
        const task = await db("task as t")
            .join("project as p", "p.id", "t.project_id")
            .select("p.project_name AS derrick" /* Aliasing */, "p.project_description", "t.task_description", "t.notes", "t.id", "t.completed")

            
        const boolTask = task.map(task => {
            return {
                ...task,
                completed: task.completed ? true : false
            }
        })
    

        res.status(200).json(boolTask)
    } catch(err) {
        next(err)
    }
})

// add a new task
server.post("/api/task", async (req, res, next) => {
    try {
        const newTask = {
            task_description: req.body.task_description,
            notes: req.body.notes,
            completed: false,
            project_id: req.body.project_id
        }

        await db("task").insert(newTask)
        res.status(201).json({ message: "You have created a new task"})
    } catch(err) {
        next(err)
    }
})

// default error
server.use((err, req, res, next) => {
    console.log("ERROR:", err)

    res.status(500).json({ message: "Something went wrong..."})
})

// Setup server
const port = 5001;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})