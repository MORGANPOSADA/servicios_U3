const { query } = require("../../../utils/mysql");
const {hashPassword}= require ("../../../utils/functions");



const save = async (user) => {
    if (!user.email || !user.password || !user.role ||!user.status || !user.personal)
        throw Error('Missing Fields');
    if (Number.isNaN(user.personal.id)) throw Error('Wrong type');
    const sql = `INSERT INTO users (email, password, role, status, personal_id) VALUES (?,?,?,?,?);`;
    const {insertId} = await query(sql,[
        user.email,
        password,
        user.role,
        user.status,
        user.personal.id
    ]);
    delete user.password;  //maybe error
    return{...user, id:insertId, password};
};

module.exports = {
    save,

};





