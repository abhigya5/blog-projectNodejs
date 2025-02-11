const Blog = require('../model/blogModel')

exports.store = async(req,res)=>{
try {
    console.log(req.file.filename);
    console.log(req.body);
        const {blog_title,blog_category, blog_auther,blog_content,blog_date,blog_desc} = req.body
        const existblogtitle = await  Blog.findOne({blog_title}).countDocuments().exec()
        if(existblogtitle>0){
            res.json({
                sucess:true,
                message:"Title already exist"
            })
        }else{
            console.log(req.body)
            await Blog.create({
                blog_title,blog_category,blog_auther,blog_content,blog_date,blog_desc,blog_image:req?.file?.filename
            })
            if(Blog){

                res.redirect('/viewBlog')
            }
        }
} catch (error) {
    res.json(error)
}
}

exports.index = async(req,res)=>{

   try {
     const blog = await Blog.find()
     if(blog){
         res.json({
            //  success:true,
             blog
         })
     }else{
         res.json({
             success: true,
             message: "Blog not found"
         })
     }
   } catch (error) {
    res.json(error)
   }
}

exports.trash = async(req,res)=>{
  try {
      const {id} = req.params
      console.log(id)
      await Blog.findByIdAndDelete(id)
      res.redirect('/viewBlog')
  } catch (error) {
    res.json(error)
  }

}

exports.update = async(req,res)=>{
  try {
      const {id} = req.params
      console.log(id)
      const {blog_title,blog_category, blog_auther,blog_content,blog_date,blog_desc} = req.body
  
      await Blog.findByIdAndUpdate(
          {_id:id},
          {
              blog_title,blog_category,blog_auther,blog_content,blog_date,blog_desc,blog_image:req?.file?.filename
          }
      )
      res.redirect('/viewBlog')
  } catch (error) {
    res.json(error)
  }
}