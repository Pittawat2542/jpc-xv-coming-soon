const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "comingsoon.html"));
});

app.get("*", (req, res) => {
    res.redirect("/");
})

app.listen(3000, console.log("Server is up on port 3000"));