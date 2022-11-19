const express=require("express")
const app=express()
const port =8080;
app.get('/pages',async(req,res)=>{
    try{
        res.send("<h1>Hellow Developers </h1>")
        console.log("Hellow Dvelopers ")
    }
    catch(error){
      
        console.log("Error ",error)
    }
})

app.listen(port,()=>{
    console.log("App is running on the port   ", port)
})