$(document).ready(function() {
    $('.error').hide();
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
});
function IsEmail(email) {
var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(!regex.test(email)) {
  return false;
}else{
  return true;
}
}

$('.error').hide();
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
  return true;
}
}

$('.error').hide();
$('#submit').click(function(){
 var pass=$('#password').val();
 if(pass==""){
     $('#invalid_password').show();
 }else if(pass.length<6){
     $("#invalid_password").html("<span> Enter atleast 6 values </span>");
 }
 else{
    window.location.href="../html/home.html"
 }
})

