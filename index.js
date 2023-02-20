const app=require("express")()

app.get("/",(req,res)=>{
 res.send("success")
})





app.listen(9000,()=>{
 console.log("running @ localhost:8000");
})