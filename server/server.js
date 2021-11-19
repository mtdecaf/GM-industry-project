const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    try{
    const data = JSON.parse(fs.readFileSync("./data/data.json"));
    // res.send(data);
    res.status(200).json(data);
    } catch(err){
        res.status(404).send(err);
    }
});

// gets the coordinates of the squre drawn by the user
app.post("/", (req, res) => {
    console.log("req.body");
    const data = req.body;
    fs.writeFileSync("./data/data.json", JSON.stringify(data));
    res.status(201).send(data);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});