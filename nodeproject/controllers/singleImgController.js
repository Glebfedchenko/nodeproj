const connection = require('../data/connection')

exports.single = (req,res)=>{
    let single = `SELECT * FROM projects WHERE id = ${req.params.id}`;
    let query = connection.query(single,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.render('single',{title:'Node JS App', data: result})
    })
}
