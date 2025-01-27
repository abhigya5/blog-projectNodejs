const { Schema, model } = require("mongoose");
const common = {
    type:String,
    required:true,
    unique:true,
    trim:true
}
const adminSchema = new Schema({
    username:common,
    email:common,
    password:{
        ...common,
        unique:false
    },
    admin_profile:String
},
{
    trimstamps:true
})
const Admin=model("Admin", adminSchema)
module.exports = Admin