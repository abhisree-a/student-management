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

