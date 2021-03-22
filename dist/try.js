

$(document).ready(function() {
var refresh = document.getElementById('GSD'); 
var opened=false;
$('#GSD').click(function(){
$.post('/gsi',{},function(data){
    var j=JSON.stringify(data,null,2);
    j=j.replace('{','');
    j=j.replace('}','');
    $('#GSD-output').html(j);
    opened=true;
});
});

$('#FSD').click( event =>{
    event.preventDefault()
    var a = $('#fsdata input[name=sid]').val().toString().replaceAll(/\s/g,'');
    if((a==''))
    alert('表單資料不能為空');
    else if(containSpecial(a)){
        alert('含有不合法的字元\n不合法的字元包含(\{)(\})(\\)(\")( \"\(\" )( \"\)\" )');
    }
else{
    $.get('/fsd',{
    sid: $('#fsdata input[name=sid]').val()
}, (data)=>{
        $('#FSD-output').html(data);
})
}

})

$('#ASD').click( event =>{
    event.preventDefault()
    var a = $('#sdata input[name=sid]').val().toString().replaceAll(/\s/g,'');
    var b = $('#sdata input[name=sname]').val().toString().replaceAll(/\s/g,'');
    if((a=='')||(b==""))
    alert('表單資料不能為空');
    else if(containSpecial(a)||containSpecial(b)){
        alert('含有不合法的字元\n不合法的字元包含(\{)(\})(\\)(\")( \"\(\" )( \"\)\" )');
    }
else{
    $.get('/asd',{
    sid: $('#sdata input[name=sid]').val(),
    sname: $('#sdata input[name=sname]').val()
},(data)=>{
    $('#ASD-output').html(data);
    if(opened)
    refresh.click();
}
)
}

}

)

$('#DSD').click( event =>{
    event.preventDefault()
    var a = $('#dsdata input[name=sid]').val().toString().replaceAll(/\s/g,'');
    if((a==''))
    alert('表單資料不能為空');
    else if(containSpecial(a)){
        alert('含有不合法的字元\n不合法的字元包含(\{)(\})(\\)(\")( \"\(\" )( \"\)\" )');
    }
    else{
    $.get('/dsd',{
    sid: $('#dsdata input[name=sid]').val()
},(data)=>{

    $('#DSD-output').html(data);
    if(opened)
    refresh.click();
})
}


})


})


function containSpecial( s )      
{      
  var containSpecial = RegExp(/[(\{)(\})(\\)(\")(\()(\))]/);      
  //var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);      
 return ( containSpecial.test(s) );
 //return 0;
}