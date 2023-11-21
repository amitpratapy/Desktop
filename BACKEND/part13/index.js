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

// const users = [];



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


// app.get("/add", async (req, res) => {
// await Message.create({name:"pit",email:"asdf@gmail.com"});
 
//     res.send("Nice")
 

   
  
// })


app.get("/success", (req, res) => {
 

    res.render("success")
  
})
app.post("/contact", async (req, res) => {
 const {name,email} = req.body

    // console.log(req.body.name)
//    const messageData =  { name:req.body.name,email:req.body.email} 
//    console.log(messageData);
   await Message.create({ name:name,email:email})
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

//2hr 0 min min completed


 