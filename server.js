const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const Router = require('../blog/router/blogRouter')
const pageview = require('./routes/pageRoute')
const Blog = require('./model/blogModel')
const Admin = require('./router/adminRouter')
const cookieParser = require('cookie-parser')
const { accesspage } = require('./utils/accesspage')
app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use('/profile', express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// db connect
require('./config/db').dbconnect()
app.use(cookieParser())
// page routing
app.use('/', pageview)
// api router
app.use('/api/blog', Router)
// admin
app.use('/api/admin',Admin)
app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`))