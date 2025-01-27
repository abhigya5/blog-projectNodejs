const upload = require('.././middleware/upload')
const blogController=require('../controller/blogController')


const router = require('express').Router()
router.post('/', upload.single('blog_image'),blogController.store)
router.get('/', blogController.index)
router.get('/:id', blogController.trash)
router.post('/:id', upload.single('blog_image'), blogController.update)


module.exports = router