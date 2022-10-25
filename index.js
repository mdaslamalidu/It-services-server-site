const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const classess = require("./data/classes.json");
const category = require("./data/category.json");


app.get('/',(req, res) => {
    res.send("site is running")
})

app.get("/category", (req,res) => {
    res.send(category)
})

app.get("/classes", (req,res) => {
    res.send(classess)
})

app.listen(port, () => {
    console.log(`website is running on port ${port}`)
})

