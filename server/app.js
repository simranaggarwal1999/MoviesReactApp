const express=require("express");
const app=express();
const Genres=require("./genres");

app.get("/genres",function(req,res){
    const  genres=Genres.getGenres();
    setTimeout(function(){
        res.json({ data: genres });
    },1000)
})
var port=process.env.PORT||4000
app.listen(port,function(){
console.log("Server is listening at 4000");
})

