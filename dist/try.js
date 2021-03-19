

$(document).ready(function() {

$('#GSD').click(function(){
$.post('/gsi',{},function(data){
    var j=JSON.stringify(data,null,2);
    j=j.replace('{','');
    j=j.replace('}','');
    //$('#ajax-output').html(JSON.parse(j));

    $('#ajax-output').html(j);
});
});

$('#FSD').click( event =>{
    event.preventDefault()
    $.get('/fsd',{
    sid: $('#fsdata input[name=sid]').val()
}, (data)=>{
        $('#ajax-output').html(data);
})
})

$('#ASD').click( event =>{
    event.preventDefault()
    var a = $('#sdata input[name=sid]').val().toString().replaceAll(/\s/g,'');
    var b = $('#sdata input[name=sname]').val().toString().replaceAll(/\s/g,'');
    if((a=='')||(b==""))
    alert('表單資料不能為空');
else{
    $.get('/asd',{
    sid: $('#sdata input[name=sid]').val(),
    sname: $('#sdata input[name=sname]').val()
},(data)=>{
    $('#ajax-output').html(data);
}
)
}

}

)

$('#DSD').click( event =>{
    event.preventDefault()
    $.get('/dsd',{
    sid: $('#dsdata input[name=sid]').val()
},(data)=>{

    $('#ajax-output').html(data);

})
})


})