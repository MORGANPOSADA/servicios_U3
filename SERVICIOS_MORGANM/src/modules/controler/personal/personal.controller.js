const {Response, Router} = require("express");

const {findAll, findById, save} = require('./personal.gateway');
const {validateError} = require("../../../utils/functions");

const getAll =async (req, res= Response) =>{
    try{
        const results = await findAll();
        res.status(200).json(results);
    }catch (err){
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const getById = async (req, res= Response) =>{
    try{
        const { id }= req.params;

        const results = await findById(id);
        res.status(200).json(results);
    }catch (err){
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const insert = async (req, res= Response) =>{
    try{
        const {
            name, surname, lastname, birthday, salary, position
        } = req.body
        const results = await save({name, surname, lastname, birthday, salary, position});
        res.status(200).json(results);
    }catch (err){
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const personalRouter = Router();
personalRouter.get('/', [], getAll);  //se dividen el 3 partes . la ruta , handlers y el meotodo que se ejecuta
personalRouter.get(`/:id`, //GET=> !BODY
    [],
    getById);
personalRouter.post(`/`,
    [],
    insert);   //CUANDO ES UNA PETICION POST , TIENE UN BODY : POST =>body

module.exports = {
    personalRouter
};