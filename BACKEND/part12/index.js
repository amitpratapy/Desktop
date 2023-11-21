import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend",
}).then( () =>console.log("db donnected")).catch(e=>console.log(e))



//schema

const messageSchema = new mongoose.Schema({
    name:String,
    email:String,
})



//schema


//Model
const Message = mongoose.model("Message",messageSchema)
//Model
 
// npm run dev
const app = express();

const users = [];



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


app.get("/add", (req, res) => {
 Message.create({name:"Amit",email:"asdf@gmail.com"}).then(()=>{
    res.send("Nice")
 })

   
  
})


app.get("/success", (req, res) => {
 

    res.render("success")
  
})
app.post("/contact", (req, res) => {
 

    console.log(req.body.name)
    users.push({username:req.body.name,email:req.body.email})
    res.redirect("/success")
  
})

app.get("/users", (req, res) => {
 

    res.json({
        users
    })
  
})

app.listen(5000, () => {
    console.log("Server is working");
})

//1hr 55 min min completed


 