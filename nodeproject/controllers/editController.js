const connection = require('../data/connection');


exports.edit = (req,res)=>{
    let single = `SELECT * FROM projects WHERE id = ${req.params.id}`;
    let query = connection.query(single,(err,result)=>{
        if (err) throw err;
        console.log(result);
        res.render('edit',{title:'Node JS App', data: result})
    })
}

exports.postedited = (req,res) =>{
    let postEdited = `UPDATE projects SET title=?, author=?,category=?,description=? WHERE id=?`;
    var  values = [req.body.title, req.body.author, req.body.category, req.body.description, req.body.id];
    const query = connection.query(postEdited, values, (err, result)=>{
        if(err){
            console.log('Error while updating');
        }
        res.status(200).send();
    })
}