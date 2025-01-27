const { default: mongoose } = require("mongoose")

exports.dbconnect=()=>{
    mongoose.connect('mongodb+srv://abhigya:abhigya@cluster0.s2rms.mongodb.net/category')
    .then(()=>{
        console.log("db connect👍")
    })
    .catch((err)=>{
            console.log(err)
    })
}

