const User = require('../../Models/User/user')
const Trainer = require('../../Models/Trainer/trainer')


const createUser = async (req, res) => {
    try {
        const body = req.body;
        body.DOB = new Date('10/16/1995Z')
        if(Object.keys(body).length !== 0){
            const user = await User.create(body);
            const trainer = await Trainer.findByIdAndUpdate(body.trainerRef,{$push : {userRefs : user._id}})
            res.status(201).json({
                success : true, 
                message : "Comment created successfully",
                user
            })
        }
        else
            res.status(204).json()
    } catch (error) {
        res.status(500).json({ success : false,error: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId)
        .populate('trainerRef')
        if(user)
            res.status(200).json({
                success: true,
                user
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
    createUser,
    getUserById
}