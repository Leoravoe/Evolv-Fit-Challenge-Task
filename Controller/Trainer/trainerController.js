const Trainer = require('../../Models/Trainer/trainer')

const createTrainer = async (req, res) => {
    try {
        const body = req.body;
        if(Object.keys(body).length !== 0){
            const trainer = await Trainer.create(body);
            res.status(201).json({
                success : true, 
                message : "Comment created successfully",
                trainer
            })
        }
        else
            res.status(204).json()
    } catch (error) {
        res.status(500).json({ success : false,error: error.message });
    }
}

const getTrainerById = async (req, res) => {
    try {
        const trainerId = req.params.id;
        const trainer = await Trainer.findById(trainerId)
        // .populate('user', 'name username profilePicture ')
        if(trainer)
            res.status(200).json({
                success: true,
                trainer
            })
        else
            res.status(404).json({
                success: false,
                message: "Data not found"
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message : error.message
        })
    }
}

module.exports = {
    createTrainer,
    getTrainerById
}