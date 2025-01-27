const { model, Schema } = require("mongoose")

const common={
    trim:true,
    type:String,
    required:true
}
const blogSchema = new Schema({
    blog_title:{
        ...common,
        unique:true
    },
    blog_category:common,
    blog_auther:common,
    blog_content:common,
    blog_date:common,
    blog_desc:common,
    blog_image:String
})

const Blog = model("Blog", blogSchema)
module.exports = Blog