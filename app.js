var Express=require('express')
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var {productmodel}=require('./model/productmodel')
module.exports={productmodel}
Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/productflutterdb")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.post('/read',(req,res)=>{
    var productobject=new productmodel(req.body)
    productobject.save((error)=>{
        if(error){
            res.send("error")
        }
        else{
            res.send("sucess")
        }
    })
   
})
app.get('/',(req,res)=>{
    res.send("welcome to product node js app")
})
app.get('/view',async(req,res)=>{
    try{
var result=await productmodel.find()
res.json(result)
    }
    catch(error)
    {
        res.json(error)
    }
})
app.post('/search',async(req,res)=>{
    try{
var result=await productmodel.find(req.body)
res.json(result)
    }
    catch(error){
res.json(error)
    }
})

app.post('/edit',async(req,res)=>{
    try{
var result=await productmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
res.json(result)
    }
    catch(error){
        res.json(error)

    }
})
app.post('/delete',async(req,res)=>{try{
    var result=await productmodel.findByIdAndDelete({"_id":req.body._id})
    res.json(result)
}
catch(error){
    res.json(error)
}
   
})
app.listen( process.env.PORT ||3003,(req,res)=>{
    console.log("servers")
})