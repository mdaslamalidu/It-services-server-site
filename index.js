const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require("./data/courses.json");
const category = require("./data/category.json");


app.get('/',(req, res) => {
    res.send("site is running")
})

app.get("/category", (req,res) => {
    res.send(category)
})

app.get("/category/:id", (req,res) => {
    const id = req.params.id;
    if(id === "07"){
        res.send(courses)
    }
    const selecdetId = courses.filter(course => course.category_id === id);
    res.send(selecdetId)
})

app.get("/courses", (req,res) => {
    res.send(courses)
})

app.get("/singleCourse/:id", (req,res) => {
    const id = req.params.id;
    const selectedId = courses.find(course => course._id === id);
    res.send(selectedId)
})

app.get("/")

app.listen(port, () => {
    console.log(`website is running on port ${port}`)
})

