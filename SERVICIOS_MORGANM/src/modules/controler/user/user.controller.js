const {Response, Router} = require('express');
const {validateError} = require('../../../utils/functions');
const {save} = require('./user.gateway');

const insert = async (req, res= Response) =>{
    try{
        const { email, password, role, personal } = req.body;
        const user = await save ({email, password, status: 1, role, personal});
        res.status(200).json(user);
    }catch (error){
        console.log(error);
        const message = validateError(error);
        res.status(400).json({message});
    }
};

const userRouter = Router();
userRouter.post(`/`,[], save);


module.exports={
    userRouter,
}