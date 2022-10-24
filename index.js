const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


app.get('/',(req, res) => {
    res.send("site is running")
})

app.listen(port, () => {
    console.log(`website is running on port ${port}`)
})

