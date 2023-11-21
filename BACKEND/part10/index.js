import express from "express";
import path from "path";
 
// npm run dev
const app = express();



//middleware
app.use(express.static(path.join(path.resolve(),"public")));//this code has written to access public folder
// aap.use is used for middleware
// express.static(path.join(path.resolve(),"public")) is a middleware
//middlewars

//middleware
app.use(express.urlencoded({extended:true}))  //this code has written to access data from form
//middleware


app.set("view engine","ejs")

app.get("/", (req, res) => {
 

    res.render("index",{name:"Abhishek"})
  
})
app.post("/", (req, res) => {
 

    console.log(req.body)
  
})

app.listen(5000, () => {
    console.log("Server is working");
})

//1hr 32 min min completed


 