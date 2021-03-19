 const express = require('express')
 const app = express()
 const port = 31254 // change the port number
 const bodyParser = require('body-parser')
 var fs = require('fs')
const { table } = require('console')
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(express.static(`${__dirname}/dist`))
 app.listen(port, () => {
 console.log(`listening on port: ${port}`)
 })



 app.post('/gsi',(req,res)=>{
    fs.readFile('students.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        res.send(student);
    });
 }
)



app.get('/fsd',(req,res)=>{
    var t =`${req.query.sid}`;
    console.log(t);
    fs.readFile('students.json', (err, data) => {
        if (err) throw err;
        let tmp=JSON.parse(data);
        res.send(`Hello, `+tmp[t]);
    });
    
 }
)


app.get('/asd',(req,res)=>{
    var sid =`${req.query.sid}`;
    var sname = `${req.query.sname}`;
    var obj = {
        
    };
    obj[sid]=sname;
    obj=JSON.stringify(obj);
    console.log(obj);
    
    fs.readFile('students.json', (err, data) => {
        
        let json = JSON.parse(data);
        json[sid]=sname;
        fs.writeFile("students.json", JSON.stringify(json), function(err){
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
         });
        console.log(json);


    });
   
 }
)

app.get('/dsd',(req,res)=>{
    var sid =`${req.query.sid}`;
    var obj = {
    };
    fs.readFile('students.json', (err, data) => {
        let json = JSON.parse(data);
        delete json[sid];
        fs.writeFile("students.json", JSON.stringify(json), function(err){
            if (err) throw err;
            console.log('Delete '+sid);
            res.send('Delete '+sid);
         });
        console.log(json);


    });
   
 }
)
/*
 app.post('/fsd',(req,res)=>{
    fs.readFile('students.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        var t =`${req.query.sname}`;
        let tar = student[t];
        res.send(`Hello, `+t);
]);
    });
}

*/
 

