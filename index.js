const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require("./data/courses.json");
const category = require("./data/category.json");


app.get('/',(req, res) => {
    res.send("It survices courses site is running")
})

app.get("/category", (req,res) => {
    res.send(category)
})

app.get("/courses", (req,res) => {
    res.send(courses)
})

app.get("/singleCourse/:id", (req,res) => {
    const id = req.params.id;
    const selectedId = courses.find(course => course._id === id);
    res.send(selectedId)
})


app.listen(port, () => {
    console.log(`It survices courses is running on port ${port}`)
})

