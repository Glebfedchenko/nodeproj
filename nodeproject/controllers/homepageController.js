const connection = require('../data/connection')

exports.indexPage = (req, res) => {
    let all = 'SELECT * FROM projects';
    const query = connection.query(all, (err, results, fields) => {
        if (err) throw err;
            console.log(results)
            res.redirect('/home');
    })
}
exports.homePage = (req,res) =>{
    let all = 'SELECT * FROM projects';
    const query = connection.query(all, (err, results, fields) => {
        if (err) throw err;
            console.log(results)
            res.render('home', { title: 'Node JS App', data:results })
    })
}
exports.print = (req,res)=>{
    let print = 'SELECT * FROM projects WHERE category = "print"';
    const query = connection.query(print,(err,results,fields)=>{
        if(err) throw err;
            console.log(results);
            res.render('print', {title:'Node JS App', data: results})
    })
}

exports.photo = (req,res)=>{
    let photo = " SELECT * FROM projects where category = 'photography' ";
    const query = connection.query(photo,(err,results,fields)=>{
        if(err) throw err;
            console.log(results);
            res.render('photo', {title:'Node JS App', data: results})
    })
}

exports.web = (req,res)=>{
    let web = 'SELECT * FROM projects where category = "web" ';
    const query = connection.query(web,(err,results,fields)=>{
        if(err) throw err;
            console.log(results);
            res.render('web', {title:'Node JS App', data: results})
    })
}

exports.apps = (req,res)=>{
    let apps = 'SELECT * FROM projects where category = "applications" ';
    const query = connection.query(apps,(err,results,fields)=>{
        if(err) throw err;
            console.log(results);
            res.render('apps', {title:'Node JS App', data: results})
    })
}