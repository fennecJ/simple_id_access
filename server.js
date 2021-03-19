 const express = require('express')
 const app = express()
 const port = 31254 // change the port number
 const bodyParser = require('body-parser')
 var fs = require('fs')
 app.use(bodyParser.urlencoded({ extended: false }))


 app.post('/gsi',(req,res)=>{
 
    fs.readFile('students.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        res.send(student);
    });

 }
 )
 app.use(express.static(`${__dirname}/dist`))
 app.listen(port, () => {
 console.log(`listening on port: ${port}`)
 })


