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
        res.status(200).json(project)
    } catch(err) {
        next(err)
    }
})

// add a new project
server.post("/api/project", async (req, res, next) => {
    try {
        const newProject = {
            name: req.body.name,
            description: req.body.description,
            completed: false
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
            .select("p.name", "p.description", "t.description", "t.notes", "t.id", "t.completed")

        res.status(200).json(task)
    } catch(err) {
        next(err)
    }
})

// add a new task
server.post("/api/task", async (req, res, next) => {
    try {
        const newTask = {
            description: req.body.description,
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