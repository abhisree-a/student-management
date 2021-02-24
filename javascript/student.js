$(document).ready(function() {
  $('.error').hide();
  $('#submit').click(function(e){
  e.preventDefault();
  console.log("hai");
        });
      });
 
    $('#submit').click(function(){
      var name = $('#name').val();
    
      if(name== ''){
        $('#name').next().show();
        return false;
      }
      if(Isname(name)==false){
        $('#invalid_name').show();
        return false;
      }
  return false;
});

function Isname(name) {
var regex = /^[A-Za-z]+$/;
if(!regex.test(name)) {
  return false;
}else{
  $('#invalid_name').hide();
  return true;
}
}


    $('#submit').click(function(){
      var email = $('#email').val();
    
      if(email== ''){
        $('#email').next().show();
        return false;
      }
      if(IsEmail(email)==false){
        $('#invalid_email').show();
        return false;
      }
  return false;
});

function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!regex.test(email)) {
  return false;
}else{
  $('#invalid_email').hide();
  return true;
}
}


$('#submit').click(function(){
  var a=$("#datebirth").val();
  var b ="2015-01-01";
 if(a>b || a==""){
    $("#invalid_date").show();
  }
  else{
    window.location.href="../html/mark.html"
  }
})



$(document).on('click', 'input[type="checkbox"]', function() {      
  $('input[type="checkbox"]').not(this).prop('checked', false);      
});


$("#submit").click(function(){
  if($('.form-group').find('input[type=checkbox]:checked').length == 0)
  {
    $('#invalid_check').show();
  }
  
});