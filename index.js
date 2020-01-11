const express = require("express")
const db = require("./data/db-config")
const server = express()

server.use(express.json())



// Setup server
const port = 5000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})