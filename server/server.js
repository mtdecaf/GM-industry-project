const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


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