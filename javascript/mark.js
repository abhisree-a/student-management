$(document).ready(function() {
    $('.error').hide();
    $('#submit').click(function(e){
    e.preventDefault();
    console.log("hai");
          });
        });

        $('#submit').click(function(){
            var c=$("#mark").val();
            var d=1200;
           if(c>d || c==""){
              $("#invalid_mark").show();
            }else if(c>d){
              $("#invalid_mark").html("<span>date <2015</span>");
            }
            else{
              window.location.href="../html/view_student.html"
            }
          })

         
          $('#submit').click(function(){
            var sub=$("#subject").val();
           if(sub==""){
              $("#invalid_sub").show();
            }
          })  

         