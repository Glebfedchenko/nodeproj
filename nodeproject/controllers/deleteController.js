const connection = require('../data/connection');

exports.delete = (req,res) =>{
    let deletion = `DELETE FROM projects where id=${req.params.id}`;
    let query = connection.query(deletion,(err,result)=>{
        if(err) throw err;
        console.log('Project was deleted');
        res.redirect('/home')
    })
}