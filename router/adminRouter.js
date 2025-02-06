const adminController = require('../controller/adminController');
const upload = require('../middleware/upload');
const router = require('express').Router();
const passport = require('passport');

router.post('/register', adminController.register);
router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/' }))
router.post('/changePassword',adminController.changePassword)
router.post('/updateProfile', upload.single('admin_profile'), adminController.updateProfile);


module.exports = router