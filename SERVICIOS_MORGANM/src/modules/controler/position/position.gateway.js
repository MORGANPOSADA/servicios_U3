const {query} = require("express");
//[ ,first, second]

const findAll = async () =>{
    const sql = `SELECT * FROM position`;
    return await  query(sql, []);

};

module.exports = {
    findAll,
};


