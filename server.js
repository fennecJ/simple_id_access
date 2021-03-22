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
   if(containSpecial(t)){
       res.send('Hmmmm，我不知道你是怎麼進來的，但是這不是你該來的地方(含有非法字元)<br>非法字元有(\{)(\})(\\)(\")(\()(\))');
   }
   else{
   fs.readFile('students.json', (err, data) => {
       if (err) throw err;
       let tmp=JSON.parse(data);
       if(tmp.hasOwnProperty(t))
       res.send(`Hello, `+tmp[t]);
       else
       res.send('抱歉，朋友<br>明明承諾過不會忘的，明明應該記得的，但我就是想不起來你是誰...<br>給我一個機會，讓我重新認識你，好嗎 :)');
   });
}
}
)


app.get('/asd',(req,res)=>{
   var sid =`${req.query.sid}`;
   var sname = `${req.query.sname}`;
   var obj = {
       
   };
   if(containSpecial(sid)||containSpecial(sname)){
       res.send('Hmmmm，我不知道你是怎麼進來的，但是這不是你該來的地方(含有非法字元)<br>非法字元有(\{)(\})(\\)(\")(\()(\))');
   }
   else{
   obj[sid]=sname;
   obj=JSON.stringify(obj);
   console.log(obj);

   fs.readFile('students.json', (err, data) => {
       
       let json = JSON.parse(data);

       if(json.hasOwnProperty(sid)){

           res.send('抱歉，'+ json[sid]+'，我已經記得你另一個名字了。<br>什麼，你想要改名?你應該知道壽司郎的活動已經截止了吧?<br>若你希望重新來過，請先刪除我原有的記憶 :)');
       }
       else{
       json[sid]=sname;
       fs.writeFile("students.json", JSON.stringify(json), function(err){
           if (err) throw err;
           console.log(sid+' '+sname+' was add to file!');
           res.send(sid+' '+sname+'嗎... 是個好名字呢!');
        });
       }
   });
}

}
)

app.get('/dsd',(req,res)=>{
   var sid =`${req.query.sid}`;
   var obj = {
   };
   if(containSpecial(sid)){
       res.send('Hmmmm，我不知道你是怎麼進來的，但是這不是你該來的地方(含有非法字元)<br>非法字元有(\{)(\})(\\)(\")(\()(\))');
   }
   else{
   fs.readFile('students.json', (err, data) => {
       let json = JSON.parse(data);
       if(json.hasOwnProperty(sid)){
           var tmp = json[sid];
           delete json[sid];
       fs.writeFile("students.json", JSON.stringify(json), function(err){
           if (err) throw err;
           res.send('再見了 '+sid+' '+tmp);
        });
       }
       else {
           res.send('真有趣，你希望我忘記一個從未存在的事物?');
       }
   });
}


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
function containSpecial( s )      
{      
 var containSpecial = RegExp(/[(\{)(\})(\\)(\")(\()(\))]/);      
 //var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);      
return ( containSpecial.test(s) );
//return 0;
}

