const response = require("express");
const {query} = require('../../../utils/mysql');

const findAll = async ()=>{
    const sql = `SELECT pe.*, po.description FROM personal pe JOIN position po ON pe.position_id = po.id`;
    return await query(sql, []);
};

const findById = async(id) => {
    if (!id) throw Error('Missing fields');
    if(Number.isNaN(id)) throw Error('Wrong Type');
    const sql = `SELECT pe.*, po.description FROM personal pe JOIN position po ON pe.position_id = po.id WHERE pe.id = ?;'`;
    return await query(sql, [id]);
};

const  save = async ( person ) => {
    if(!person.name || !person.surname || !person.position.id ||
    !person.birthday || !person.salary) throw Error('Missing fields');
    const sql = `INSERT INTO personal(name, surname, lastname, birthday, salary, posittion_id) VALUES (?,?,?,?,?,?);`;
    return await query(sql,[person.name, person.surname, person.lastname, person.birthday, person.salary, person.position.id]);
};

module.exports = {
    findAll,
    findById,
    save
};