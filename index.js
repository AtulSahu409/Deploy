const express =require("express")
require("dotenv").config()
const app=express()

app.get("/",(req,res)=>{
    res.send("wel")
})
app.get("/name",(req,res)=>{
    res.send(`hello i am ${process.env.NAME}`)
})
app.listen(9000,()=>{
    console.log("port run on 9000")
})
