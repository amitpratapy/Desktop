import express from "express";
// npm run dev
const app = express();

app.get("/", (req, res) => {
    res.send("Hii Amit")
})

app.listen(5000, () => {
    console.log("Server is working");
})

//59 min completed