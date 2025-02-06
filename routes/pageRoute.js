const router = require('express').Router()
const Admin = require('../model/adminModel')
const Blog = require('../model/blogModel')
const { accesspage } = require('../utils/accesspage')


router.get('/', accesspage, async (req, res) => {
    res.render('pages/index')
})

router.get('/addBlog', accesspage, (req, res) => {
    res.render('pages/addBlog')
})

router.get('/viewBlog', accesspage, async (req, res) => {
    const blog = await Blog.find()
    res.render('pages/viewBlog', {
        blog
    })
})

router.get('/updateBlog',accesspage, async (req, res) => {
    const { id } = req.query
    const singleBlog = await Blog.findById(id)
    res.render('pages/updateBlog',
        { blog: singleBlog }
    )
})

router.get('/register',accesspage, async (req, res) => {
    res.render('pages/register')
})

router.get('/login', async (req, res) => {
    res.render('pages/login')
})

router.get('/logout', accesspage,(req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/login')
        }
    })
})


router.get('/myProfile', accesspage, async (req, res) => {

    const email = req.user.email
    const singleAdmin = await Admin.findOne({ email })

    res.render('pages/myProfile', { admin: singleAdmin })
})

router.get('/changePassword', accesspage, (req, res) => {
    const email = req.user.email
    res.render('pages/changePassword', { email })
})


module.exports = router