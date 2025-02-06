const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

const cookieParser = require('cookie-parser')
const Router = require('../blog/router/blogRouter')
const pageview = require('./routes/pageRoute')
const Admin = require('./router/adminRouter')
const flash=require('express-flash')
const session=require('express-session')

const passport=require('passport')
const passportAuth=require('./config/passport')
passportAuth(passport)

app.set('view engine' , 'ejs')
app.use(express.static('public'))

app.use('/profile', express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser('test2'))
app.use(session('test'))
app.use(passport.initialize())
app.use(passport.session({secret:'test23'}))
app.use(flash())

// db connect
require('./config/db').dbconnect()

// page routing
app.use('/', pageview)

// api router
app.use('/api/blog', Router)

// admin
app.use('/api/admin',Admin)

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`))