const express = require('express')
const {
    createUser,
    verifyUser,
    verifyAdmin,
    fetchAllUsers,
    deleteUser,
    fetchUser,
    imageUpload,
    newUser,
    updateUser,
    imageDelete
} = require('../user/userController')
const router = express.Router()

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

router.route('/register').post(createUser)
router.route('/login').post(verifyUser)
router.route('/adminlogin').post(verifyAdmin)
router.route('/fetchUsers').get(fetchAllUsers)
router.route('/deleteUser').delete(deleteUser)
router.route('/profile').get(fetchUser)
router.route('/create').post(newUser)
router.route('/update').patch(updateUser)
router.route('/image').post(upload.single('image'), imageUpload)
router.route('/imageDelete').delete(imageDelete)

module.exports = router 