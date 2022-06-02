//Importing express library to create server
const express = require("express")

const app = express()

app.get("/user", (req, res) =>{
    res.send("Fetch API Call")
})
const port = 5000

app.listen(port,(req,res) =>{
    console.log(`Starting application on port : http://localhost: ${port}`)
})

