const path = require("path");
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get("/่jpcapp", (req, res) => {
    res.sendFile(path.join(__dirname, "comingsoon.html"));
});

app.listen(3000, console.log("Server is up on port 3000"));