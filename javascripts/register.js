$(document).ready(function(){

	$("#reader-account").focus(function(){
		if(this.value == ""){
			$(this).attr("placeholder","");
		}
    $(".Tip1").show();
    $(".Tip2").hide();
	});
	$("#reader-account").blur(function(){
		if(this.value == ""){
			$(this).attr("placeholder","请输入您的手机号");
      $(".Tip2").show();
      $("#name-span2").hide();
		}
    else if(isNaN($(this).val())||($(this).val().length !==11)){
      alert("请输入11位数字，谢谢！"); 
      $("#name-span2").hide();
      $("#name-span3").show();
      $(this).focus();
      $(this).val("");
    }
    else{
      $(".Tip2").hide();
      $("#name-span3").hide();
      $("#name-span2").show();
    }
    $(".Tip1").hide();
	});

  $("#reader-password").focus(function(){
    $(".Tip3").show();
    $(".Tip4").hide();
  });
  $("#reader-password").blur(function(){
    if(this.value == ""){
      $(".Tip4").show();
      $(".Tip3").hide();
      $("#password-span2").hide();
    }
    else if(!/^\w{6,16}$/.test($(this).val())){
      alert("限定6-16字母、数字或下划线的组合");
      $("#password-span2").hide();
      $("#password-span3").show();
      $(this).focus();
      $(this).val("");
    }
    else{
      $(".Tip3").hide();
      $("#password-span3").hide();
      $("#password-span2").show();
    }
    
  });
  
   $("#reader-again-password").focus(function(){
    $(".Tip5").show();
    $(".Tip6").hide();
  });
  $("#reader-again-password").blur(function(){
    if($("#reader-password").val()==""){
      alert("请先设置上一步的密码，谢谢");
      $(".Tip5").hide();
      $(this).val("");
      $("#reader-password").focus();
    }
    else if(this.value == ""){
      $(".Tip6").show();
      $(".Tip5").hide();
      $("#again-password-span2").hide();
    }
    else{
      if(!($(this).val()== $("#reader-password").val()))
      {
      alert("您再次输入的密码不一致，请重输");
      $("#again-password-span2").hide();
      $("#again-password-span3").show();
      $(this).focus();
      $(this).val("");
      }
      else{
        $(".Tip5").hide();
        $("#again-password-span2").show();
        $("#again-password-span3").hide();
      }
    }
  });


})