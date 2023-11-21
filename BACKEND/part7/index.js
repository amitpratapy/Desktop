import express from "express";
import path from "path";
// npm run dev
const app = express();

app.get("/", (req, res) => {
    const pathlocation = path.resolve();

    res.sendFile(path.join(pathlocation,"./index.html"));
    //page not found
})

app.listen(5000, () => {
    console.log("Server is working");
})

//1hr 9 min min completed