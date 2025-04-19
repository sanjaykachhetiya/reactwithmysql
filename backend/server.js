const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "myapp"
})

// to send from html body
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.json("Hello World From Backend Side")
})

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log('Listening')
})