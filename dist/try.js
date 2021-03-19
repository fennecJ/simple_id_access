var jsonf = (function () {
    var jsonf = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': 'students.json',
        'dataType': "json",
        'success': function (data) {
            jsonf = data;
        }
    });
    return jsonf;
})();



$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()

$.get('./step5', {
  sid: $('#ajax-form input[name=sid]').val(),
  sname:jsonf[$('#ajax-form input[name=sid]').val()]
}, (data) => {
    //   document.getElementById('ajax-output').innerHTML = data;
    $('#ajax-output').html(data);
})
    // Step 11 code goes here
})


/*
$('#sdata button[type="submit"]').click((event)=>{
    event.preventDefault()
var objs = {
table=[]
};
var sid =  $('#sdata input[name=sid]').val();
var sname = $('#sdata input[name=sname]').val();
obj.table[sid]=sname;
var jsond = JSON.stringify(obj);

fs.readFile('students.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    var obj = JSON.parse(data); //now it an object
    obj.table[sid]=sname;
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('students.json', json, 'utf8', callback); // write it back
}});
});
*/



});


$('#GSD').click(function(){
$.post('/gsi',{},function(data){
    $('#ajax-output').html(JSON.stringify(data));
});
});