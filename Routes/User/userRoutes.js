const {Router} = require('express')
const {
    createUser,
    getUserById
} = require('../../Controller/User/userController')

const router = Router();


router.post('/user',createUser);

router.get('/user/:id',getUserById)


module.exports = router;