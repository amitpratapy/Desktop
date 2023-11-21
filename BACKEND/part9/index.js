import express from "express";
import path from "path";
 
// npm run dev
const app = express();

//middleware
app.use(express.static(path.join(path.resolve(),"public")));
// aap.use is used for middleware
// express.static(path.join(path.resolve(),"public")) is a middleware
//middleware

app.set("view engine","ejs")

app.get("/", (req, res) => {
 

    res.render("index",{name:"Abhishek"})
    // res.sendFile("index.html")
    //page not found
})

app.listen(5000, () => {
    console.log("Server is working");
})

//1hr 21 min min completed