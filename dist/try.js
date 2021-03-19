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

});


$('#GSD').click(function(){
$.post('/gsi',{},function(data){
    var j=JSON.stringify(data,null,2);
    //$('#ajax-output').html(JSON.parse(j));

    $('#ajax-output').html(j);
});
});
$(document).ready(function() {
$('#FSD').click( event =>{
    event.preventDefault()
    $.get('/fsd',{
    sid: $('#fsdata input[name=sid]').val()
}, (data)=>{
        $('#ajax-output').html(data);
})
})

})