var Mongoose=require('mongoose')
var productschema=new Mongoose.Schema({
    pname:String,
    ptype:String,
    pprice:String
})
var productmodel=Mongoose.model('products',productschema)
module.exports={productmodel}