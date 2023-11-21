import express from "express";
 
// npm run dev
const app = express();

app.set("view engine","ejs")

app.get("/", (req, res) => {
 

    res.render("index")
    //page not found
})

app.listen(5000, () => {
    console.log("Server is working");
})

//1hr 14 min min completed