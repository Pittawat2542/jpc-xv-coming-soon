const path = require("path");
const express = require("express");
const app = express();
const jpcapp = express();

jpcapp.use(express.static('public'));

jpcapp.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "comingsoon.html"));
});

app.use("/jpcapp", jpcapp);

app.listen(3000, console.log("Server is up on port 3000"));