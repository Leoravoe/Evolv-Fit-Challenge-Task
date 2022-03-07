const {Router} = require('express')
const {
    createTrainer,
    getTrainerById
} = require('../../Controller/Trainer/trainerController')

const router = Router();


router.post('/trainer',createTrainer);

router.get('/trainer/:id',getTrainerById)


module.exports = router;